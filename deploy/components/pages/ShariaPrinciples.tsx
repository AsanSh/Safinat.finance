'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, AlertTriangle, Eye, Scale } from 'lucide-react'

const ShariaPrinciples = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const principles = [
    {
      icon: X,
      title: 'Нет Риба (процентов)',
      description: 'Мы не взимаем проценты с ваших платежей. Все наши продукты основаны на торговле активами, а не на денежных займах.',
      details: [
        'Отсутствие процентных ставок',
        'Торговля реальными активами',
        'Справедливое распределение прибыли'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Нет Гарар (неопределенности)',
      description: 'Все условия четко определены и прозрачны. Никаких скрытых комиссий или неожиданных платежей.',
      details: [
        'Прозрачные условия договора',
        'Четкое определение всех платежей',
        'Отсутствие скрытых комиссий'
      ]
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      description: 'Полная открытость в каждой сделке. Вы видите, куда идут ваши деньги и как рассчитывается прибыль.',
      details: [
        'Открытая отчетность',
        'Понятная структура платежей',
        'Доступ к документации'
      ]
    },
    {
      icon: Scale,
      title: 'Справедливость',
      description: 'Каждый платеж приближает вас к владению активом. Справедливое распределение рисков и прибыли.',
      details: [
        'Справедливое распределение рисков',
        'Равные права сторон',
        'Этичное ведение бизнеса'
      ]
    }
  ]

  return (
    <section id="principles" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ключевые принципы нашего
            <span className="text-gradient block">шариатского соответствия</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша модель финансирования основана на четырех фундаментальных принципах исламского финансирования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {principle.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-primary-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Финансирование, основанное на активах
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              В отличие от традиционного банковского кредитования, наше исламское финансирование 
              всегда связано с реальными активами. Мы покупаем недвижимость или оборудование, 
              а затем продаем или сдаем в аренду нашим клиентам, обеспечивая полное соответствие 
              принципам шариата.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShariaPrinciples
