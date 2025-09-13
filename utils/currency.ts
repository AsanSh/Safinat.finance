// Utility functions for currency formatting
// These functions work with the CurrencyContext

export const formatCurrency = (amount: number, currency: 'KGS' | 'USD', exchangeRate: number): string => {
  if (currency === 'USD') {
    const usdAmount = amount / exchangeRate
    return `$${formatNumber(Math.round(usdAmount))}`
  }
  
  return `${formatNumber(amount)} сом`
}

export const formatCurrencyCompact = (amount: number, currency: 'KGS' | 'USD', exchangeRate: number): string => {
  if (currency === 'USD') {
    const usdAmount = amount / exchangeRate
    if (usdAmount >= 1000000) {
      return `$${(usdAmount / 1000000).toFixed(1)}M`
    } else if (usdAmount >= 1000) {
      return `$${(usdAmount / 1000).toFixed(1)}K`
    }
    return `$${formatNumber(Math.round(usdAmount))}`
  }
  
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}М сом`
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}К сом`
  }
  
  return `${formatNumber(amount)} сом`
}

export const getExchangeRateDisplay = (exchangeRate: number): string => {
  return `1 USD = ${exchangeRate.toFixed(2)} KGS`
}

// Форматирование чисел с пробелами как разделителями (1 000, 759 403)
export const formatNumber = (number: number): string => {
  return number.toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

// Форматирование чисел с пробелами для валют
export const formatNumberWithCurrency = (amount: number, currency: 'KGS' | 'USD', exchangeRate: number): string => {
  if (currency === 'USD') {
    const usdAmount = amount / exchangeRate
    return `$${formatNumber(Math.round(usdAmount))}`
  }
  
  return `${formatNumber(amount)} сом`
}
