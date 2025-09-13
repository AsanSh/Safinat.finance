'use client'

import { motion } from 'framer-motion'
import { Building2, Clock, Shield, TrendingUp } from 'lucide-react'

const ConstructionHero = () => {
  const benefits = [
    {
      icon: Building2,
      title: 'До ₽500М',
      description: 'Сумма финансирования'
    },
    {
      icon: Clock,
      title: '3-5 дней',
      description: 'Рассмотрение заявки'
    },
    {
      icon: Shield,
      title: '100% шариат',
      description: 'Соответствие исламу'
    },
    {
      icon: TrendingUp,
      title: 'Гибкие условия',
      description: 'Индивидуальный подход'
    }
  ]

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-islamic-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Финансирование
              <span className="text-gradient block">строительных проектов</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Получите финансирование для ваших строительных проектов через 
              исламское финансирование. Выгодные условия, быстрое рассмотрение 
              и индивидуальный подход к каждому проекту.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#consultation" className="btn-primary">
                Подать заявку
              </a>
              <a href="#conditions" className="btn-secondary">
                Условия финансирования
              </a>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ConstructionHero
