'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, FileCheck, AlertTriangle, TrendingUp, Users } from 'lucide-react'

const RiskManagement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const riskMeasures = [
    {
      icon: Shield,
      title: 'Залоговое обеспечение',
      description: 'Все проекты обеспечены залогом недвижимости',
      details: [
        'Оценка залога независимыми экспертами',
        'Залог превышает сумму инвестиций на 30%',
        'Регулярная переоценка залогового имущества'
      ]
    },
    {
      icon: Lock,
      title: 'Страхование рисков',
      description: 'Комплексное страхование всех видов рисков',
      details: [
        'Страхование строительных рисков',
        'Страхование от форс-мажорных обстоятельств',
        'Страхование ответственности застройщика'
      ]
    },
    {
      icon: FileCheck,
      title: 'Юридическая защита',
      description: 'Полная правовая защита инвестиций',
      details: [
        'Проверка всех документов юристами',
        'Регистрация залогов в государственных реестрах',
        'Судебная защита в случае споров'
      ]
    },
    {
      icon: Users,
      title: 'Контроль застройщика',
      description: 'Постоянный мониторинг деятельности застройщика',
      details: [
        'Финансовый мониторинг застройщика',
        'Контроль хода строительства',
        'Проверка использования средств'
      ]
    }
  ]

  const riskLevels = [
    {
      level: 'Низкий',
      percentage: '5%',
      color: 'from-green-500 to-green-600',
      description: 'Проекты с высокой степенью надежности',
      examples: [
        'Готовые объекты недвижимости',
        'Проекты с государственной поддержкой',
        'Застройщики с отличной репутацией'
      ]
    },
    {
      level: 'Средний',
      percentage: '10%',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Стандартные строительные проекты',
      examples: [
        'Жилые комплексы в развитых районах',
        'Коммерческая недвижимость',
        'Проверенные застройщики'
      ]
    },
    {
      level: 'Высокий',
      percentage: '15%',
      color: 'from-orange-500 to-orange-600',
      description: 'Проекты с повышенной доходностью',
      examples: [
        'Новые районы развития',
        'Инновационные проекты',
        'Застройщики с хорошей историей'
      ]
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Управление рисками
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная система защиты ваших инвестиций и минимизации рисков
          </p>
        </motion.div>

        {/* Risk Management Measures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {riskMeasures.map((measure, index) => {
            const Icon = measure.icon
            return (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {measure.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {measure.description}
                    </p>
                    <ul className="space-y-2">
                      {measure.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
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

        {/* Risk Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Уровни риска и доходности
            </h3>
            <p className="text-gray-600">
              Различные уровни риска для разных типов инвесторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskLevels.map((risk, index) => (
              <div key={risk.level} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${risk.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {risk.level} риск
                </h4>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {risk.percentage}
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {risk.description}
                </p>
                <ul className="space-y-1 text-left">
                  {risk.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start text-xs text-gray-500">
                      <div className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risk Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">
                Важное предупреждение о рисках
              </h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Инвестирование в недвижимость связано с рисками. Прошлые результаты 
                не гарантируют будущую доходность. Все инвестиции могут как приносить 
                прибыль, так и приводить к убыткам. Перед принятием решения об 
                инвестировании внимательно изучите все документы и проконсультируйтесь 
                с финансовым консультантом.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RiskManagement
