'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  FileCheck, 
  Globe,
  Award,
  Heart
} from 'lucide-react'

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const advantages = [
    {
      icon: Shield,
      title: '100% соответствие шариату',
      description: 'Все наши финансовые продукты полностью соответствуют принципам исламского финансирования',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Стабильная доходность',
      description: 'Предсказуемая и стабильная доходность от 12% до 18% годовых',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Быстрое оформление',
      description: 'Оформление сделки в течение 3-5 рабочих дней',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Персональный подход',
      description: 'Индивидуальные условия для каждого клиента и проекта',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Прозрачность',
      description: 'Полная прозрачность всех операций и отчетность',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Международные стандарты',
      description: 'Соответствие международным стандартам исламского финансирования',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Award,
      title: 'Опытная команда',
      description: 'Команда экспертов с многолетним опытом в исламском финансировании',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Социальная ответственность',
      description: 'Поддержка социально значимых проектов и развития общества',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Наши преимущества
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Почему клиенты выбирают именно нас для исламского финансирования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Успешных проектов</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">₽2.5Б</div>
                <div className="text-sm sm:text-base text-gray-600">Объем финансирования</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">15%</div>
                <div className="text-sm sm:text-base text-gray-600">Средняя доходность</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">98%</div>
                <div className="text-sm sm:text-base text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages
