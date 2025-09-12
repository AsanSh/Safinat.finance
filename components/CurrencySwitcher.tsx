'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Coins } from 'lucide-react'
import { getCurrentExchangeRate, getExchangeRateDisplay } from '@/utils/exchangeRate'

type Currency = 'KGS' | 'USD'

const CurrencySwitcher = () => {
  const [currency, setCurrency] = useState<Currency>('KGS')
  const [exchangeRate, setExchangeRate] = useState(getCurrentExchangeRate())

  useEffect(() => {
    // Обновляем курс валют
    setExchangeRate(getCurrentExchangeRate())
  }, [])

  const formatAmount = (amount: number): string => {
    if (currency === 'USD') {
      return `$${(amount / exchangeRate).toLocaleString('en-US', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      })}`
    }
    return `${amount.toLocaleString('ru-RU')} сом`
  }

  const toggleCurrency = () => {
    setCurrency(currency === 'KGS' ? 'USD' : 'KGS')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-2"
    >
      <button
        onClick={toggleCurrency}
        className="flex items-center space-x-2 px-2 py-2 sm:px-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
      >
        {currency === 'KGS' ? (
          <Coins className="w-4 h-4 text-green-600" />
        ) : (
          <DollarSign className="w-4 h-4 text-blue-600" />
        )}
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          {currency}
        </span>
      </button>
      
      {currency === 'USD' && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs text-gray-500"
        >
          Курс: {getExchangeRateDisplay()}
        </motion.div>
      )}
    </motion.div>
  )
}

export default CurrencySwitcher
