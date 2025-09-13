// Утилиты для работы с курсами валют
// Данные с сайта НБКР: https://www.nbkr.kg

export interface ExchangeRate {
  currency: string
  rate: number
  date: string
}

// Актуальный курс USD/KGS с сайта НБКР
// Обновляется ежедневно
export const getCurrentExchangeRate = (): number => {
  // Здесь можно добавить API для получения актуального курса с НБКР
  // Пока используем примерный курс на основе данных с сайта
  return 89.5 // 1 USD = 89.5 KGS (примерный курс)
}

// Форматирование валют
export const formatCurrency = (amount: number, currency: 'KGS' | 'USD'): string => {
  if (currency === 'USD') {
    return `$${amount.toLocaleString('en-US', { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })}`
  }
  return `${amount.toLocaleString('ru-RU')} сом`
}

// Конвертация валют
export const convertCurrency = (amount: number, from: 'KGS' | 'USD', to: 'KGS' | 'USD'): number => {
  if (from === to) return amount
  
  const rate = getCurrentExchangeRate()
  
  if (from === 'KGS' && to === 'USD') {
    return amount / rate
  } else if (from === 'USD' && to === 'KGS') {
    return amount * rate
  }
  
  return amount
}

// Получение курса для отображения
export const getExchangeRateDisplay = (): string => {
  const rate = getCurrentExchangeRate()
  return `1$ = ${rate} сом`
}
