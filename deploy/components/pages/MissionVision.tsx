'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Heart, Shield } from 'lucide-react'

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Target,
      title: 'Миссия',
      description: 'Сделать исламское финансирование доступным и понятным для всех, кто стремится к этичным и прибыльным инвестициям в соответствии с принципами шариата.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Видение',
      description: 'Стать ведущим провайдером исламского финансирования в Центральной Азии, способствуя экономическому развитию региона через этичные финансовые решения.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Ценности',
      description: 'Честность, прозрачность, социальная ответственность и полное соответствие исламским принципам во всех наших операциях.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Принципы',
      description: 'Строгое соблюдение принципов шариата, защита интересов клиентов и создание устойчивой финансовой экосистемы.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="mission" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Миссия, видение и ценности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Основополагающие принципы нашей деятельности
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Наш подход к работе
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Этичность:</strong> Все операции проводятся в строгом соответствии с исламскими принципами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Прозрачность:</strong> Полная открытость в отчетности и условиях сотрудничества
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Надежность:</strong> Защита интересов клиентов и стабильность партнерских отношений
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Инновации:</strong> Использование современных технологий для улучшения сервиса
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Гарантии качества
                </h4>
                <p className="text-gray-600">
                  Мы гарантируем высокое качество наших услуг и полное соответствие 
                  международным стандартам исламского финансирования
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision
