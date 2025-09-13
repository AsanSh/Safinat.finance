'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, TrendingUp, Home, DollarSign, Users, Briefcase } from 'lucide-react'

const InvestmentProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const products = [
    {
      icon: DollarSign,
      title: 'Фиксированный доход',
      targetReturn: '7.5% - 11%',
      liquidity: '3 месяца',
      risk: 'Низкий',
      description: 'Стабильные инвестиции с гарантированным доходом',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Home,
      title: 'Недвижимость',
      targetReturn: '10% - 15%',
      liquidity: '6 месяцев',
      risk: 'Средний',
      description: 'Инвестиции в коммерческую и жилую недвижимость',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building2,
      title: 'Частный капитал',
      targetReturn: '18%+',
      liquidity: '3-5 лет',
      risk: 'Средний',
      description: 'Инвестиции в развивающиеся компании',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Венчурный капитал',
      targetReturn: '20%+',
      liquidity: '5-7 лет',
      risk: 'Высокий',
      description: 'Инвестиции в стартапы и инновационные проекты',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Краудфандинг',
      targetReturn: '12% - 18%',
      liquidity: '1-3 года',
      risk: 'Средний',
      description: 'Коллективные инвестиции в проекты',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Briefcase,
      title: 'Структурированные продукты',
      targetReturn: '8% - 14%',
      liquidity: '6-12 месяцев',
      risk: 'Низкий-Средний',
      description: 'Комбинированные инвестиционные решения',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Инвестиционные продукты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Диверсифицированный портфель шариат-соответствующих инвестиций 
            с привлекательной доходностью
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex-grow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Целевая доходность:</span>
                      <span className="font-semibold text-green-600">{product.targetReturn}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ликвидность:</span>
                      <span className="font-semibold text-gray-900">{product.liquidity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Риск:</span>
                      <span className={`font-semibold ${
                        product.risk === 'Низкий' ? 'text-green-600' :
                        product.risk === 'Средний' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {product.risk}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-auto">
                  Узнать подробнее
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InvestmentProducts
