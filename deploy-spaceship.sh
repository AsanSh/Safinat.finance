#!/bin/bash

# Скрипт для деплоя на Spaceship хостинг
# Использование: ./deploy-spaceship.sh

echo "🚀 Начинаем деплой на Spaceship..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Запустите скрипт из корня проекта."
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

# Создаем продакшн сборку
echo "🔨 Создаем продакшн сборку..."
npm run build

# Создаем директорию для деплоя
echo "📁 Создаем директорию для деплоя..."
mkdir -p deploy

# Копируем необходимые файлы
echo "📋 Копируем файлы..."
cp -r .next deploy/
cp -r public deploy/
cp -r app deploy/
cp -r components deploy/
cp -r contexts deploy/
cp -r utils deploy/
cp package.json deploy/
cp package-lock.json deploy/
cp next.config.js deploy/
cp tailwind.config.js deploy/
cp postcss.config.js deploy/
cp tsconfig.json deploy/

# Создаем .env.production файл
echo "⚙️ Создаем конфигурацию для продакшна..."
cat > deploy/.env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://safinat.finance
EOF

# Создаем package.json для продакшна
echo "📝 Создаем package.json для продакшна..."
cat > deploy/package.json << EOF
{
  "name": "safinat-finance",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "next start -p 3000",
    "build": "next build"
  },
  "dependencies": {
    "next": "14.2.32",
    "react": "^18",
    "react-dom": "^18",
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "react-intersection-observer": "^9.5.3",
    "react-hot-toast": "^2.4.1"
  }
}
EOF

# Создаем .htaccess для Apache (если используется)
echo "🌐 Создаем .htaccess..."
cat > deploy/.htaccess << EOF
RewriteEngine On
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
</IfModule>
EOF

echo "✅ Деплой готов!"
echo "📁 Файлы для загрузки находятся в папке 'deploy/'"
echo ""
echo "📋 Инструкции для загрузки на Spaceship:"
echo "1. Зайдите в cPanel File Manager"
echo "2. Перейдите в папку public_html (или safinat.finance)"
echo "3. Загрузите все файлы из папки 'deploy/'"
echo "4. Установите Node.js в cPanel (если доступно)"
echo "5. Запустите: npm install && npm start"
echo ""
echo "🌐 Альтернативно, используйте статический экспорт:"
echo "npm run build && npm run export"
