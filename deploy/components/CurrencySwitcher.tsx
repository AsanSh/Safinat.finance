'use client'

import { motion } from 'framer-motion'
import { useCurrency } from '@/contexts/CurrencyContext'

interface CurrencySwitcherProps {
  shouldUseWhiteText?: boolean
}

const CurrencySwitcher = ({ shouldUseWhiteText = false }: CurrencySwitcherProps) => {
  const { currency, setCurrency, exchangeRate, isLoading } = useCurrency()

  const toggleCurrency = () => {
    setCurrency(currency === 'KGS' ? 'USD' : 'KGS')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleCurrency}
      className={`w-12 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
        shouldUseWhiteText 
          ? 'bg-white bg-opacity-20 hover:bg-opacity-30' 
          : 'bg-gray-200 hover:bg-gray-300'
      }`}
    >
      <div className="flex flex-col items-center">
        <span className={`text-xs font-bold ${shouldUseWhiteText ? 'text-white' : 'text-gray-800'}`}>
          {currency}
        </span>
        {currency === 'USD' && (
          <span className={`text-xs ${shouldUseWhiteText ? 'text-white text-opacity-70' : 'text-gray-500'}`}>
            {exchangeRate.toFixed(1)}
          </span>
        )}
      </div>
    </motion.button>
  )
}

export default CurrencySwitcher
