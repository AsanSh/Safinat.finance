export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Тестовая страница</h1>
        <p className="text-gray-600">Если вы видите эту страницу, значит Next.js работает корректно!</p>
        <a href="/" className="mt-4 inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
          Вернуться на главную
        </a>
      </div>
    </div>
  )
}
