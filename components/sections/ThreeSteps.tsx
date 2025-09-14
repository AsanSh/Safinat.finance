'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ArrowRight, Building2, Users, Shield, Heart } from 'lucide-react'

const ThreeSteps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      id: 1,
      title: 'Инвестор',
      description: 'Размещает средства для получения доходности по принципам Шариата',
      icon: TrendingUp,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-600',
      details: [
        'Доходность 15-25% годовых',
        'Полное соответствие Шариату',
        'Прозрачные условия',
        'Защита капитала'
      ]
    },
    {
      id: 2,
      title: 'Safinat Finance',
      description: 'Платформа обеспечивает безопасность сделок и соответствие исламским принципам',
      icon: Shield,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      details: [
        'Шариатский надзор',
        'Проверка залогов',
        'Управление рисками',
        'Юридическая поддержка'
      ]
    },
    {
      id: 3,
      title: 'Бизнес',
      description: 'Получает финансирование для развития без нарушения исламских принципов',
      icon: Building2,
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600',
      details: [
        'Быстрое одобрение',
        'Гибкие условия',
        'Без скрытых комиссий',
        'Поддержка развития'
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Простая и прозрачная схема работы, основанная на принципах исламского финансирования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 origin-left"
                    />
                  </div>
                )}

                <div className={`${step.bgColor} rounded-2xl p-8 h-full relative z-10`}>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-secondary-200">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-secondary-600 mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + detailIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3`} />
                        <span className="text-sm text-secondary-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Готовы начать?
            </h3>
            <p className="text-secondary-600 mb-6">
              Присоединяйтесь к сообществу инвесторов и бизнеса, работающих по принципам Шариата
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Стать инвестором
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Получить финансирование
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThreeSteps
