'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCurrency } from '@/contexts/CurrencyContext'
import { formatNumber } from '@/utils/currency'
import { Building2, Calendar, TrendingUp, Shield, ArrowRight, Eye, Users } from 'lucide-react'

const CasesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { currency, exchangeRate } = useCurrency()

  const formatAmount = (amount: number): string => {
    if (currency === 'USD') {
      const usdAmount = amount / exchangeRate
      return `$${formatNumber(Math.round(usdAmount))}`
    }
    return `${formatNumber(amount)} сом`
  }

  const cases = [
    {
      id: 1,
      title: 'Строительство жилого комплекса',
      description: 'Финансирование строительства многоэтажного жилого комплекса в Бишкеке',
      amount: 50000000, // 50 млн сом
      term: 18, // месяцев
      profitability: 22, // %
      collateral: 'Земельный участок 2.5 га',
      status: 'Активная',
      investors: 45,
      progress: 75,
      type: 'Мурабаха',
      location: 'Бишкек, ул. Манаса',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Закупка строительной техники',
      description: 'Приобретение экскаваторов и бульдозеров для строительной компании',
      amount: 25000000, // 25 млн сом
      term: 12, // месяцев
      profitability: 18, // %
      collateral: 'Строительная техника',
      status: 'Завершена',
      investors: 28,
      progress: 100,
      type: 'Иджара',
      location: 'Ош, промзона',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Торговый центр "Ала-Тоо"',
      description: 'Финансирование строительства торгового центра в центре города',
      amount: 80000000, // 80 млн сом
      term: 24, // месяцев
      profitability: 25, // %
      collateral: 'Коммерческая недвижимость',
      status: 'Активная',
      investors: 67,
      progress: 45,
      type: 'Мурабаха',
      location: 'Бишкек, пр. Чуй',
      image: '/api/placeholder/400/300'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Активная':
        return 'bg-green-100 text-green-800'
      case 'Завершена':
        return 'bg-blue-100 text-blue-800'
      case 'На рассмотрении':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Мурабаха':
        return 'bg-primary-100 text-primary-800'
      case 'Иджара':
        return 'bg-accent-100 text-accent-800'
      case 'Истисна':
        return 'bg-secondary-100 text-secondary-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Кейсы сделок
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Реальные примеры успешных инвестиций и финансирования по принципам Шариата
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-primary-600" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(caseItem.status)}`}>
                    {caseItem.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(caseItem.type)}`}>
                    {caseItem.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {caseItem.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 text-sm">
                  {caseItem.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 text-sm">Сумма</span>
                    <span className="font-semibold text-secondary-900">{formatAmount(caseItem.amount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 text-sm">Срок</span>
                    <span className="font-semibold text-secondary-900">{caseItem.term} мес.</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 text-sm">Доходность</span>
                    <span className="font-semibold text-green-600">{caseItem.profitability}% годовых</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 text-sm">Залог</span>
                    <span className="font-semibold text-secondary-900 text-right text-xs">{caseItem.collateral}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-secondary-600">Прогресс</span>
                    <span className="text-sm font-semibold text-secondary-900">{caseItem.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${caseItem.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Users className="w-4 h-4 mr-1" />
                    {caseItem.investors} инвесторов
                  </div>
                  <div className="flex items-center text-sm text-secondary-600">
                    <Shield className="w-4 h-4 mr-1" />
                    {caseItem.location}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Хотите увидеть больше кейсов?
            </h3>
            <p className="text-secondary-600 mb-6">
              Изучите полную базу успешных сделок и выберите подходящую инвестицию
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center mx-auto"
            >
              <Eye className="w-5 h-5 mr-2" />
              Все кейсы
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CasesSection
