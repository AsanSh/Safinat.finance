# 🚀 Загрузка в папку safinat.finance

## 📁 Ваша структура на хостинге
У вас есть папка `safinat.finance` в `public_html`, поэтому загружаем туда.

## ✅ Способ 1: Новый ZIP архив (рекомендуется)

1. **Скачайте**: `safinat-finance-v2.zip` (918KB) из GitHub
2. **Зайдите в cPanel** → File Manager
3. **Перейдите в папку**: `public_html/safinat.finance/`
4. **Удалите все старые файлы** из этой папки
5. **Загрузите** `safinat-finance-v2.zip`
6. **Распакуйте** архив прямо в папку `safinat.finance/`

## ✅ Способ 2: Загрузка файлов напрямую

1. **Скачайте папку** `deploy-static/` из GitHub
2. **Загрузите все файлы** из `deploy-static/` в `public_html/safinat.finance/`
3. **Убедитесь**, что `index.html` находится в `safinat.finance/`

## ✅ Способ 3: Через терминал (если доступен SSH)

```bash
cd /home/kdlqemdxxn/public_html/safinat.finance
wget https://github.com/AsanSh/Safinat.finance/archive/main.zip
unzip main.zip
cp -r Safinat.finance-main/deploy-static/* .
rm -rf Safinat.finance-main main.zip
```

## 📁 Итоговая структура

После загрузки в `public_html/safinat.finance/` должны быть:
```
safinat.finance/
├── index.html          ← Главная страница
├── _next/              ← Статические ресурсы
├── about/              ← Страница "О нас"
├── business/           ← Страница "Бизнесу"
├── investors/          ← Страница "Инвесторам"
├── calculator/         ← Калькулятор
├── contacts/           ← Контакты
├── documents/          ← Документы
├── dashboard/          ← Личный кабинет
├── sharia-compliance/  ← Шариатский совет
├── .htaccess           ← Конфигурация сервера
└── icon.svg            ← Иконка сайта
```

## 🔍 Проверка

После загрузки сайт будет доступен по адресу:
**https://safinat.finance** (если домен настроен на папку `safinat.finance`)

## ⚠️ Важно

- Убедитесь, что загружаете в правильную папку `safinat.finance`
- Не загружайте в `public_html` напрямую
- Проверьте права доступа к файлам (644 для файлов, 755 для папок)

## 📞 Если проблемы

1. **Сайт не открывается**: Проверьте, что `index.html` в папке `safinat.finance`
2. **Ошибки 404**: Убедитесь, что `.htaccess` загружен
3. **Стили не работают**: Проверьте папку `_next/static/css/`

---

**Файл для загрузки**: `safinat-finance-v2.zip` (918KB)
**Целевая папка**: `public_html/safinat.finance/`
**Статус**: ✅ Готов к загрузке
