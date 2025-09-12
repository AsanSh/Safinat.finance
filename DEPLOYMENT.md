# 🚀 Инструкция по деплою safinat.finance

## Подготовка сервера

### 1. Требования к серверу
- **ОС**: Ubuntu 20.04+ или CentOS 8+
- **RAM**: минимум 2GB, рекомендуется 4GB+
- **CPU**: минимум 2 ядра
- **Диск**: минимум 20GB свободного места
- **Docker**: версия 20.10+
- **Docker Compose**: версия 2.0+

### 2. Установка Docker на сервер

```bash
# Обновляем систему
sudo apt update && sudo apt upgrade -y

# Устанавливаем Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Добавляем пользователя в группу docker
sudo usermod -aG docker $USER

# Устанавливаем Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Перезагружаемся
sudo reboot
```

## Настройка домена

### 1. Покупка домена
- Купите домен `safinat.finance` у регистратора
- Настройте DNS записи:
  ```
  A    safinat.finance    -> IP_АДРЕС_СЕРВЕРА
  A    www.safinat.finance -> IP_АДРЕС_СЕРВЕРА
  ```

### 2. Получение SSL сертификата

#### Вариант A: Let's Encrypt (бесплатно)
```bash
# Устанавливаем Certbot
sudo apt install certbot

# Получаем сертификат
sudo certbot certonly --standalone -d safinat.finance -d www.safinat.finance

# Копируем сертификаты
sudo cp /etc/letsencrypt/live/safinat.finance/fullchain.pem ./ssl/safinat.finance.crt
sudo cp /etc/letsencrypt/live/safinat.finance/privkey.pem ./ssl/safinat.finance.key
```

#### Вариант B: Коммерческий сертификат
- Купите SSL сертификат у провайдера
- Загрузите файлы в папку `ssl/`

## Деплой приложения

### 1. Загрузка кода на сервер
```bash
# Клонируем репозиторий
git clone <ваш-репозиторий> /var/www/safinat.finance
cd /var/www/safinat.finance

# Или загружаем файлы через SCP/SFTP
```

### 2. Создание SSL директории
```bash
mkdir -p ssl
# Поместите SSL сертификаты в эту папку
```

### 3. Запуск приложения
```bash
# Делаем скрипт исполняемым
chmod +x deploy.sh

# Запускаем деплой
./deploy.sh
```

### 4. Проверка работы
```bash
# Проверяем статус контейнеров
docker-compose ps

# Проверяем логи
docker-compose logs -f

# Тестируем сайт
curl -I https://safinat.finance
```

## Мониторинг и обслуживание

### 1. Просмотр логов
```bash
# Логи приложения
docker-compose logs -f safinat-app

# Логи Nginx
docker-compose logs -f nginx
```

### 2. Обновление приложения
```bash
# Останавливаем контейнеры
docker-compose down

# Обновляем код
git pull origin main

# Пересобираем и запускаем
./deploy.sh
```

### 3. Резервное копирование
```bash
# Создаем бэкап
tar -czf safinat-backup-$(date +%Y%m%d).tar.gz .

# Восстанавливаем из бэкапа
tar -xzf safinat-backup-YYYYMMDD.tar.gz
```

## Настройка автоматического обновления SSL

### 1. Создание cron задачи
```bash
# Редактируем crontab
sudo crontab -e

# Добавляем строку для автообновления
0 2 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx
```

## Безопасность

### 1. Настройка файрвола
```bash
# Разрешаем только необходимые порты
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### 2. Регулярные обновления
```bash
# Обновляем систему
sudo apt update && sudo apt upgrade -y

# Обновляем Docker образы
docker-compose pull
```

## Troubleshooting

### Проблема: Сайт не открывается
```bash
# Проверяем статус контейнеров
docker-compose ps

# Проверяем логи
docker-compose logs

# Проверяем порты
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

### Проблема: SSL сертификат не работает
```bash
# Проверяем сертификат
openssl x509 -in ssl/safinat.finance.crt -text -noout

# Проверяем конфигурацию Nginx
docker-compose exec nginx nginx -t
```

## Контакты для поддержки

- **Техническая поддержка**: support@safinat.finance
- **Документация**: [README.md](./README.md)
- **Логи**: `docker-compose logs -f`
