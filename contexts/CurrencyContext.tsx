'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Currency = 'KGS' | 'USD'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  exchangeRate: number
  isLoading: boolean
  error: string | null
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

interface CurrencyProviderProps {
  children: ReactNode
}

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, setCurrency] = useState<Currency>('KGS')
  const [exchangeRate, setExchangeRate] = useState<number>(89.5) // Fallback rate
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch exchange rate from NBKR
  const fetchExchangeRate = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      // NBKR API endpoint for USD to KGS
      const response = await fetch('https://www.nbkr.kg/XML/daily.xml')
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate')
      }
      
      const xmlText = await response.text()
      
      // Parse XML to extract USD rate
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
      
      // Find USD rate in the XML
      const usdElements = xmlDoc.getElementsByTagName('Currency')
      let usdRate = 89.5 // Fallback
      
      for (let i = 0; i < usdElements.length; i++) {
        const currencyElement = usdElements[i]
        const codeElement = currencyElement.getElementsByTagName('ISOCode')[0]
        const rateElement = currencyElement.getElementsByTagName('Value')[0]
        
        if (codeElement && codeElement.textContent === 'USD' && rateElement) {
          usdRate = parseFloat(rateElement.textContent || '89.5')
          break
        }
      }
      
      setExchangeRate(usdRate)
      console.log('Exchange rate updated:', usdRate)
      
    } catch (err) {
      console.error('Error fetching exchange rate:', err)
      setError('Не удалось загрузить курс валют')
      // Keep the fallback rate
    } finally {
      setIsLoading(false)
    }
  }

  // Load currency from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency
    if (savedCurrency && (savedCurrency === 'KGS' || savedCurrency === 'USD')) {
      setCurrency(savedCurrency)
    }
  }, [])

  // Fetch exchange rate on mount and every 30 minutes
  useEffect(() => {
    fetchExchangeRate()
    
    const interval = setInterval(fetchExchangeRate, 30 * 60 * 1000) // 30 minutes
    
    return () => clearInterval(interval)
  }, [])

  // Save currency to localStorage when it changes
  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem('selectedCurrency', newCurrency)
  }

  const value: CurrencyContextType = {
    currency,
    setCurrency: handleSetCurrency,
    exchangeRate,
    isLoading,
    error
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
