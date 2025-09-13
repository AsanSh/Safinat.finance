'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  DollarSign, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Briefcase,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from 'lucide-react'
import ProgressIndicator from './ProgressIndicator'

interface ApplicationFormProps {
  type: 'investor' | 'business'
}

const ApplicationForm = ({ type }: ApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Business Type
    businessType: '',
    businessCategory: '',
    
    // Step 2: Amount
    amount: '',
    purpose: '',
    
    // Step 3: Personal Info
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Step 4: Address
    address: '',
    city: '',
    
    // Step 5: Income
    monthlyIncome: '',
    businessIncome: '',
    
    // Step 6: Documents
    hasDocuments: false,
    agreeTerms: false
  })

  const steps = [
    'Тип бизнеса',
    'Сумма',
    'Контакты',
    'Адрес',
    'Доходы',
    'Завершение'
  ]

  const businessTypes = [
    { id: 'retail', name: 'Розничная торговля', icon: '🏪' },
    { id: 'manufacturing', name: 'Производство', icon: '🏭' },
    { id: 'services', name: 'Услуги', icon: '🔧' },
    { id: 'construction', name: 'Строительство', icon: '🏗️' },
    { id: 'agriculture', name: 'Сельское хозяйство', icon: '🌾' },
    { id: 'other', name: 'Другое', icon: '💼' }
  ]

  const businessCategories = [
    { id: 'startup', name: 'Стартап', icon: '🚀' },
    { id: 'small', name: 'Малый бизнес', icon: '🏢' },
    { id: 'medium', name: 'Средний бизнес', icon: '🏬' },
    { id: 'large', name: 'Крупный бизнес', icon: '🏭' }
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Здесь будет отправка данных
    console.log('Form submitted:', formData)
    alert('Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Какой у вас тип бизнеса? ✨
              </h2>
              <p className="text-gray-600">
                Это поможет нам подобрать оптимальные условия финансирования
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleInputChange('businessType', type.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.businessType === type.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{type.name}</div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Размер вашего бизнеса?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleInputChange('businessCategory', category.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.businessCategory === category.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Какая сумма вам нужна? 💰
              </h2>
              <p className="text-gray-600">
                Укажите сумму финансирования и цель использования
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сумма финансирования (сом)
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Введите сумму"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цель финансирования
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => handleInputChange('purpose', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Выберите цель</option>
                  <option value="equipment">Оборудование</option>
                  <option value="inventory">Товарные запасы</option>
                  <option value="expansion">Расширение бизнеса</option>
                  <option value="working-capital">Оборотные средства</option>
                  <option value="real-estate">Недвижимость</option>
                  <option value="other">Другое</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                💡 Чем точнее вы укажете цель, тем лучше мы сможем подобрать условия финансирования
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Как с вами связаться? ✨
              </h2>
              <p className="text-gray-600">
                Мы отправим обновления о вашей заявке
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Фамилия
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Фамилия"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+996 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-800">
                💡 Мы не делаем рекламные звонки - только по вашей заявке
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Где находится ваш бизнес? 🏠
              </h2>
              <p className="text-gray-600">
                Укажите адрес регистрации или основного офиса
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Адрес
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Улица, дом, квартира"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Выберите город</option>
                  <option value="bishkek">Бишкек</option>
                  <option value="osh">Ош</option>
                  <option value="jalalabad">Джалал-Абад</option>
                  <option value="karakol">Каракол</option>
                  <option value="tokmok">Токмок</option>
                  <option value="other">Другой</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">Последний вопрос!</p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Расскажите о доходах 📈
              </h2>
              <p className="text-gray-600">
                Это поможет нам оценить вашу платежеспособность
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ежемесячный доход бизнеса (сом)
                </label>
                <input
                  type="number"
                  value={formData.businessIncome}
                  onChange={(e) => handleInputChange('businessIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Введите сумму"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Личный ежемесячный доход (сом)
                </label>
                <input
                  type="number"
                  value={formData.monthlyIncome}
                  onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Введите сумму"
                />
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="text-sm text-yellow-800">
                💡 Мы сопоставляем эти данные с банковскими выписками для точной оценки
              </p>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Отлично! 🎉
              </h2>
              <p className="text-gray-600">
                Мы получили всю необходимую информацию
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">
                  Заявка готова к отправке
                </h3>
              </div>
              
              <div className="space-y-2 text-sm text-green-700">
                <p>• Мы рассмотрим вашу заявку в течение 24 часов</p>
                <p>• Свяжемся с вами для уточнения деталей</p>
                <p>• Предоставим персональные условия финансирования</p>
                <p>• Все расчеты соответствуют принципам шариата</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.hasDocuments}
                  onChange={(e) => handleInputChange('hasDocuments', e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  У меня есть все необходимые документы
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Я согласен с <a href="/documents" className="text-primary-600 hover:underline">условиями обработки данных</a>
                </span>
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      {/* Progress Indicator */}
      <ProgressIndicator 
        currentStep={currentStep} 
        totalSteps={steps.length} 
        steps={steps} 
      />

      {/* Form Card */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
      >
        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            Назад
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={nextStep}
              className="btn-primary inline-flex items-center"
            >
              Следующий шаг
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.agreeTerms || !formData.hasDocuments}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                !formData.agreeTerms || !formData.hasDocuments
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              Отправить заявку
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default ApplicationForm
