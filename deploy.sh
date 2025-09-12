#!/bin/bash

# Скрипт деплоя для safinat.finance
echo "🚀 Начинаем деплой safinat.finance..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Запустите скрипт из корневой директории проекта."
    exit 1
fi

# Останавливаем существующие контейнеры
echo "🛑 Останавливаем существующие контейнеры..."
docker-compose down

# Собираем новый образ
echo "🔨 Собираем новый образ..."
docker-compose build --no-cache

# Запускаем контейнеры
echo "▶️ Запускаем контейнеры..."
docker-compose up -d

# Проверяем статус
echo "📊 Проверяем статус контейнеров..."
docker-compose ps

# Проверяем логи
echo "📝 Последние логи приложения:"
docker-compose logs --tail=20 safinat-app

echo "✅ Деплой завершен!"
echo "🌐 Сайт доступен по адресу: https://safinat.finance"
echo "📊 Мониторинг: docker-compose logs -f"
