// Utility functions for currency formatting
// These functions work with the CurrencyContext

export const formatCurrency = (amount: number, currency: 'KGS' | 'USD', exchangeRate: number): string => {
  if (currency === 'USD') {
    const usdAmount = amount / exchangeRate
    return `$${usdAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })}`
  }
  
  return `${amount.toLocaleString('ru-RU')} сом`
}

export const formatCurrencyCompact = (amount: number, currency: 'KGS' | 'USD', exchangeRate: number): string => {
  if (currency === 'USD') {
    const usdAmount = amount / exchangeRate
    if (usdAmount >= 1000000) {
      return `$${(usdAmount / 1000000).toFixed(1)}M`
    } else if (usdAmount >= 1000) {
      return `$${(usdAmount / 1000).toFixed(1)}K`
    }
    return `$${usdAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })}`
  }
  
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}М сом`
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}К сом`
  }
  
  return `${amount.toLocaleString('ru-RU')} сом`
}

export const getExchangeRateDisplay = (exchangeRate: number): string => {
  return `1 USD = ${exchangeRate.toFixed(2)} KGS`
}
