'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, TrendingUp, FileCheck, Users } from 'lucide-react'

const NewAdvantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const advantages = [
    {
      icon: Shield,
      title: 'Шариат',
      description: 'Полное соответствие принципам исламского финансирования без риба (ростовщичества)',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      details: [
        'Соответствие Корану и Сунне',
        'Шариатский надзор',
        'Запрет на риба (ростовщичество)',
        'Этические инвестиции'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Залог',
      description: 'Все сделки обеспечены реальными активами: недвижимость, техника, товары',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-600',
      details: [
        'Реальные активы',
        'Оценка залогов',
        'Страхование рисков',
        'Защита инвестиций'
      ]
    },
    {
      icon: FileCheck,
      title: 'Прозрачность',
      description: 'Четкие условия, открытая отчетность и полная прозрачность всех операций',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600',
      details: [
        'Открытая отчетность',
        'Четкие условия',
        'Регулярные обновления',
        'Публичная информация'
      ]
    },
    {
      icon: Users,
      title: 'Партнёрство',
      description: 'Работаем как партнеры, разделяя риски и прибыль согласно исламским принципам',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      details: [
        'Разделение рисков',
        'Совместная прибыль',
        'Долгосрочные отношения',
        'Взаимная поддержка'
      ]
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Наши преимущества
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Четыре ключевых принципа, которые делают Safinat Finance надежным партнером
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className={`${advantage.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6">
                    {advantage.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {advantage.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + detailIndex * 0.05 }}
                        className="flex items-center"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${advantage.color} rounded-full mr-3 flex-shrink-0`} />
                        <span className="text-sm text-secondary-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-secondary-600">Соответствие Шариату</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
              <div className="text-sm text-secondary-600">Успешных сделок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">15-25%</div>
              <div className="text-sm text-secondary-600">Доходность в год</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-secondary-600">Поддержка клиентов</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewAdvantages
