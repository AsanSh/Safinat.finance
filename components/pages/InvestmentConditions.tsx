'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, DollarSign, Calendar, Shield, FileText, Users } from 'lucide-react'

const InvestmentConditions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const conditions = [
    {
      icon: DollarSign,
      title: 'Минимальная сумма',
      value: '₽1,000,000',
      description: 'Минимальная сумма для начала инвестирования',
      details: [
        'От ₽1,000,000 - базовый пакет',
        'От ₽5,000,000 - премиум пакет',
        'От ₽10,000,000 - VIP пакет'
      ]
    },
    {
      icon: Calendar,
      title: 'Сроки инвестирования',
      value: '12-36 месяцев',
      description: 'Гибкие сроки в зависимости от проекта',
      details: [
        '12 месяцев - краткосрочные проекты',
        '24 месяца - среднесрочные проекты',
        '36 месяцев - долгосрочные проекты'
      ]
    },
    {
      icon: Shield,
      title: 'Гарантии',
      value: '100% защита',
      description: 'Полная защита ваших инвестиций',
      details: [
        'Залоговое обеспечение',
        'Страхование рисков',
        'Юридическая защита'
      ]
    },
    {
      icon: FileText,
      title: 'Документооборот',
      value: 'Полная прозрачность',
      description: 'Ежемесячная отчетность и контроль',
      details: [
        'Ежемесячные отчеты',
        'Онлайн-мониторинг',
        'Персональный менеджер'
      ]
    }
  ]

  const requirements = [
    'Гражданство Кыргызстана или резидентство',
    'Возраст от 18 лет',
    'Документы, подтверждающие доходы',
    'Справка об отсутствии судимости',
    'Банковская справка о состоянии счетов'
  ]

  return (
    <section id="conditions" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Условия инвестирования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные и выгодные условия для наших инвесторов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {conditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <motion.div
                key={condition.title}
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
                      {condition.title}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {condition.value}
                    </div>
                    <p className="text-gray-600 mb-4">
                      {condition.description}
                    </p>
                    <ul className="space-y-2">
                      {condition.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
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

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Требования к инвесторам
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Готовы стать инвестором?
              </h4>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для получения персональной консультации
              </p>
              <a href="#consultation" className="btn-primary">
                Подать заявку
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentConditions
