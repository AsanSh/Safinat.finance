'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Calendar, DollarSign, Coins, Edit3 } from 'lucide-react'
import { getCurrentExchangeRate, formatCurrency } from '@/utils/exchangeRate'

type Currency = 'KGS' | 'USD'

const ModernCalculator = () => {
  const [currency, setCurrency] = useState<Currency>('KGS')
  const [amount, setAmount] = useState(1000000) // 1 млн сом
  const [term, setTerm] = useState(36) // 36 месяцев
  const [rate, setRate] = useState(15) // 15% годовых
  const [exchangeRate] = useState(getCurrentExchangeRate())

  const calculatePayments = () => {
    const principal = currency === 'USD' ? amount * exchangeRate : amount
    const totalAmount = principal * (1 + (rate / 100) * (term / 12))
    const monthlyPayment = totalAmount / term
    const totalProfit = totalAmount - principal

    return {
      monthlyPayment: currency === 'USD' ? monthlyPayment / exchangeRate : monthlyPayment,
      totalAmount: currency === 'USD' ? totalAmount / exchangeRate : totalAmount,
      totalProfit: currency === 'USD' ? totalProfit / exchangeRate : totalProfit,
      principal: currency === 'USD' ? principal / exchangeRate : principal
    }
  }

  const results = calculatePayments()

  const formatAmount = (amount: number): string => {
    return formatCurrency(amount, currency)
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 text-white p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Рассчитайте ваши ежемесячные платежи</h2>
        <p className="text-primary-100 text-sm sm:text-base">Прозрачные расчеты по договору мурабаха</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Side - Inputs */}
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50">
          <div className="space-y-6 sm:space-y-8">
            {/* Currency Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Валюта
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrency('KGS')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    currency === 'KGS'
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Coins className="w-5 h-5 inline mr-2" />
                  Сомы (KGS)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    currency === 'USD'
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <DollarSign className="w-5 h-5 inline mr-2" />
                  Доллары (USD)
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Сумма финансирования
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-6 py-4 text-2xl font-bold border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Введите сумму"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Edit3 className="w-5 h-5" />
                </button>
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  {currency === 'USD' ? '$' : 'сом'}
                </div>
              </div>
            </div>

            {/* Term Slider */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Срок финансирования: <span className="text-primary-600 font-bold">{term} месяцев</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="6"
                  max="60"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>6 мес</span>
                  <span>60 мес</span>
                </div>
              </div>
            </div>

            {/* Rate Slider */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Наценка: <span className="text-primary-600 font-bold">{rate}% годовых</span>
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="25"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>10%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Results */}
        <div className="p-4 sm:p-6 lg:p-8 bg-white">
          <div className="space-y-4 sm:space-y-6">
            {/* Payment Summary */}
            <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Результаты расчета
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ежемесячный платеж:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatAmount(results.monthlyPayment)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Общая сумма к возврату:</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatAmount(results.totalAmount)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Наша прибыль:</span>
                  <span className="text-lg font-semibold text-green-600">
                    {formatAmount(results.totalProfit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Schedule */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                График платежей
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Первый платеж: через 30 дней</p>
                <p>• Последний платеж: через {term} месяцев</p>
                <p>• Досрочное погашение: без штрафов</p>
                <p>• Всего платежей: {term}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                Подать заявку онлайн за 2 минуты
              </button>
              <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                Получить консультацию
              </button>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Важно:</strong> Safinat Finance предоставляет исламское финансирование только для бизнес-целей. 
                Это может включать коммерческую недвижимость, строительство и другие бизнес-потребности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernCalculator
