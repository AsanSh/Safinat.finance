'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Heart, Users, Award, Lightbulb, UserCheck } from 'lucide-react'

const ValuesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Shield,
      title: 'Честность',
      description: 'Мы ведем бизнес с полной честностью и прозрачностью во всех операциях.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Социальная ответственность',
      description: 'Поддерживаем социально значимые проекты и развитие общества.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Клиентоориентированность',
      description: 'Ставим интересы клиентов в центр всех наших решений.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Стремимся к высочайшему качеству во всех аспектах нашей работы.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Используем современные технологии для улучшения сервиса.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: UserCheck,
      title: 'Партнерство',
      description: 'Строим долгосрочные отношения с клиентами и партнерами.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Наши ценности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Принципы, которыми мы руководствуемся в нашей работе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
      </div>
    </section>
  )
}

export default ValuesSection
