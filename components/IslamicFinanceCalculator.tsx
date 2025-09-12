'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Calendar, DollarSign } from 'lucide-react'
import { getCurrentExchangeRate, formatCurrency } from '@/utils/exchangeRate'

type Currency = 'KGS' | 'USD'

const IslamicFinanceCalculator = () => {
  const [currency, setCurrency] = useState<Currency>('KGS')
  const [amount, setAmount] = useState(1000000) // 1 млн сом
  const [term, setTerm] = useState(36) // 36 месяцев
  const [rate, setRate] = useState(15) // 15% годовых
  const [exchangeRate] = useState(getCurrentExchangeRate()) // Курс KGS к USD с НБКР

  const calculatePayments = () => {
    const principal = currency === 'USD' ? amount * exchangeRate : amount
    const monthlyRate = rate / 100 / 12
    const totalPayments = term
    
    // Расчет по формуле мурабаха (без сложных процентов)
    const totalAmount = principal * (1 + (rate / 100) * (term / 12))
    const monthlyPayment = totalAmount / totalPayments
    const totalProfit = totalAmount - principal

    return {
      monthlyPayment: currency === 'USD' ? monthlyPayment / exchangeRate : monthlyPayment,
      totalAmount: currency === 'USD' ? totalAmount / exchangeRate : totalAmount,
      totalProfit: currency === 'USD' ? totalProfit / exchangeRate : totalProfit,
      principal: currency === 'USD' ? principal / exchangeRate : principal
    }
  }

  const results = calculatePayments()

  const formatAmountLocal = (amount: number): string => {
    return formatCurrency(amount, currency)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Калькулятор исламского финансирования</h3>
          <p className="text-gray-600">Рассчитайте условия по договору мурабаха</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Валюта
            </label>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrency('KGS')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currency === 'KGS'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Сомы (KGS)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currency === 'USD'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Доллары (USD)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Сумма финансирования
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите сумму"
              />
              <div className="absolute right-3 top-3 text-gray-500">
                {currency === 'USD' ? '$' : 'сом'}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Срок финансирования: {term} месяцев
            </label>
            <input
              type="range"
              min="6"
              max="60"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>6 мес</span>
              <span>60 мес</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Наценка: {rate}% годовых
            </label>
            <input
              type="range"
              min="10"
              max="25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10%</span>
              <span>25%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-primary-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
              Результаты расчета
            </h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Ежемесячный платеж:</span>
                <span className="text-xl font-bold text-primary-600">
                  {formatAmountLocal(results.monthlyPayment)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Общая сумма к возврату:</span>
                <span className="text-lg font-semibold text-gray-900">
                  {formatAmountLocal(results.totalAmount)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Наша прибыль:</span>
                <span className="text-lg font-semibold text-green-600">
                  {formatAmountLocal(results.totalProfit)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Основная сумма:</span>
                <span className="text-lg font-semibold text-gray-700">
                  {formatAmountLocal(results.principal)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              График платежей
            </h4>
            <p className="text-gray-600 mb-3">
              Равномерные платежи в течение {term} месяцев
            </p>
            <div className="text-sm text-gray-500">
              <p>• Первый платеж: через 30 дней</p>
              <p>• Последний платеж: через {term} месяцев</p>
              <p>• Досрочное погашение: без штрафов</p>
            </div>
          </div>

          <button className="w-full btn-primary">
            Подать заявку на финансирование
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800">
          <strong>Важно:</strong> Данный расчет является предварительным и основан на принципах мурабаха. 
          Окончательные условия будут определены после рассмотрения заявки и оценки залога. 
          Все расчеты соответствуют принципам шариата.
        </p>
      </div>
    </motion.div>
  )
}

export default IslamicFinanceCalculator
