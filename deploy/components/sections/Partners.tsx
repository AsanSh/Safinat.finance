'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Banknote, Shield, Users } from 'lucide-react'

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    {
      name: 'Айыл Банк',
      type: 'Банковский партнер',
      description: 'Ведущий банк Кыргызстана, специализирующийся на исламском финансировании',
      logo: '🏦',
      category: 'banking'
    },
    {
      name: 'Кыргыз Строительная Компания',
      type: 'Строительный партнер',
      description: 'Крупнейшая строительная компания с опытом работы более 20 лет',
      logo: '🏗️',
      category: 'construction'
    },
    {
      name: 'Исламский Центр Кыргызстана',
      type: 'Религиозный консультант',
      description: 'Официальный консультант по вопросам соответствия шариату',
      logo: '🕌',
      category: 'religious'
    },
    {
      name: 'Аль-Халяль Инвестиции',
      type: 'Инвестиционный партнер',
      description: 'Международная компания по исламским инвестициям',
      logo: '💼',
      category: 'investment'
    },
    {
      name: 'Бишкек Девелопмент',
      type: 'Девелопер',
      description: 'Компания по развитию недвижимости в столице',
      logo: '🏢',
      category: 'development'
    },
    {
      name: 'Шариат Совет КР',
      type: 'Надзорный орган',
      description: 'Орган надзора за соответствием исламским принципам',
      logo: '⚖️',
      category: 'oversight'
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'banking':
        return Banknote
      case 'construction':
        return Building2
      case 'religious':
        return Shield
      case 'investment':
      case 'development':
      case 'oversight':
        return Users
      default:
        return Users
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'banking':
        return 'from-blue-500 to-blue-600'
      case 'construction':
        return 'from-orange-500 to-orange-600'
      case 'religious':
        return 'from-green-500 to-green-600'
      case 'investment':
        return 'from-purple-500 to-purple-600'
      case 'development':
        return 'from-teal-500 to-teal-600'
      case 'oversight':
        return 'from-indigo-500 to-indigo-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Наши партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем с ведущими организациями в сфере исламского финансирования 
            и строительства для обеспечения максимального качества услуг
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const CategoryIcon = getCategoryIcon(partner.category)
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Logo and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{partner.logo}</div>
                    <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(partner.category)} rounded-lg flex items-center justify-center`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <div className="text-sm text-primary-600 font-medium mb-3">
                      {partner.type}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Доверие и надежность
              </h3>
              <p className="text-gray-600">
                Наши партнеры подтверждают высокое качество наших услуг
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Лицензированная деятельность</h4>
                <p className="text-gray-600 text-sm">
                  Все операции проводятся в соответствии с законодательством КР
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Международное признание</h4>
                <p className="text-gray-600 text-sm">
                  Членство в международных ассоциациях исламского финансирования
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Проверенные проекты</h4>
                <p className="text-gray-600 text-sm">
                  Все проекты проходят тщательную проверку и одобрение
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
