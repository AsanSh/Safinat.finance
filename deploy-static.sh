#!/bin/bash

# Скрипт для статического деплоя на Spaceship хостинг
# Использование: ./deploy-static.sh

echo "🚀 Начинаем статический деплой на Spaceship..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Запустите скрипт из корня проекта."
    exit 1
fi

# Создаем статический экспорт
echo "🔨 Создаем статический экспорт..."
npm run build

# Проверяем, что папка out создалась
if [ ! -d "out" ]; then
    echo "❌ Ошибка: папка 'out' не создалась. Проверьте конфигурацию Next.js."
    exit 1
fi

# Создаем директорию для деплоя
echo "📁 Создаем директорию для статического деплоя..."
mkdir -p deploy-static

# Копируем все файлы из папки out
echo "📋 Копируем статические файлы..."
cp -r out/* deploy-static/

# Создаем .htaccess для Apache
echo "🌐 Создаем .htaccess для статического сайта..."
cat > deploy-static/.htaccess << EOF
# Включаем mod_rewrite
RewriteEngine On

# Перенаправляем все запросы на index.html для SPA
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Кэширование статических файлов
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Сжатие
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Безопасность
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
EOF

# Создаем README с инструкциями
echo "📝 Создаем инструкции..."
cat > deploy-static/README.txt << EOF
ИНСТРУКЦИИ ПО ЗАГРУЗКЕ НА SPACESHIP ХОСТИНГ:

1. Зайдите в cPanel File Manager
2. Перейдите в папку public_html (или safinat.finance)
3. Удалите все старые файлы (если есть)
4. Загрузите ВСЕ файлы из этой папки (deploy-static/)
5. Убедитесь, что index.html находится в корне
6. Сайт будет доступен по адресу: https://safinat.finance

ВАЖНО:
- Это статический сайт, не требует Node.js
- Все файлы должны быть в корневой папке
- .htaccess настроен для правильной работы

Структура файлов:
- index.html (главная страница)
- about/ (страница "О нас")
- business/ (страница "Бизнесу")
- investors/ (страница "Инвесторам")
- calculator/ (калькулятор)
- contacts/ (контакты)
- documents/ (документы)
- dashboard/ (личный кабинет)
- sharia-compliance/ (шариатский совет)
- _next/ (статические ресурсы)
EOF

echo "✅ Статический деплой готов!"
echo "📁 Файлы для загрузки находятся в папке 'deploy-static/'"
echo ""
echo "📋 Инструкции для загрузки на Spaceship:"
echo "1. Зайдите в cPanel File Manager"
echo "2. Перейдите в папку public_html (или safinat.finance)"
echo "3. Удалите все старые файлы"
echo "4. Загрузите ВСЕ файлы из папки 'deploy-static/'"
echo "5. Убедитесь, что index.html в корне"
echo ""
echo "🌐 После загрузки сайт будет доступен по адресу:"
echo "   https://safinat.finance"
echo ""
echo "📊 Размер файлов:"
du -sh deploy-static/
