'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, DollarSign, Calendar, Shield, FileText, Building2 } from 'lucide-react'

const ConstructionConditions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const conditions = [
    {
      icon: DollarSign,
      title: 'Сумма финансирования',
      value: '₽10М - ₽500М',
      description: 'Гибкие лимиты в зависимости от проекта',
      details: [
        'От ₽10,000,000 - малые проекты',
        'От ₽50,000,000 - средние проекты',
        'До ₽500,000,000 - крупные проекты'
      ]
    },
    {
      icon: Calendar,
      title: 'Сроки финансирования',
      value: '12-60 месяцев',
      description: 'Адаптируемся под ваш проект',
      details: [
        '12-24 месяца - быстрые проекты',
        '24-36 месяцев - стандартные проекты',
        '36-60 месяцев - долгосрочные проекты'
      ]
    },
    {
      icon: Shield,
      title: 'Залоговое обеспечение',
      value: 'От 30%',
      description: 'Минимальное обеспечение проекта',
      details: [
        'Залог недвижимости',
        'Залог оборудования',
        'Поручительства'
      ]
    },
    {
      icon: FileText,
      title: 'Документооборот',
      value: 'Упрощенный',
      description: 'Минимум документов, максимум скорости',
      details: [
        'Базовый пакет документов',
        'Быстрая проверка',
        'Онлайн-подача заявки'
      ]
    }
  ]

  const requirements = [
    'Опыт строительной деятельности от 2 лет',
    'Лицензия на строительную деятельность',
    'Положительная кредитная история',
    'Документы на земельный участок',
    'Проектная документация',
    'Разрешения на строительство'
  ]

  const projectTypes = [
    {
      type: 'Жилая недвижимость',
      examples: ['Многоквартирные дома', 'Таунхаусы', 'Коттеджные поселки'],
      maxAmount: '₽500М',
      term: '12-36 месяцев'
    },
    {
      type: 'Коммерческая недвижимость',
      examples: ['Торговые центры', 'Офисные здания', 'Склады'],
      maxAmount: '₽300М',
      term: '18-48 месяцев'
    },
    {
      type: 'Инфраструктурные проекты',
      examples: ['Дороги', 'Мосты', 'Коммуникации'],
      maxAmount: '₽200М',
      term: '24-60 месяцев'
    }
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
            Условия финансирования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные и прозрачные условия для строительных компаний
          </p>
        </motion.div>

        {/* Main Conditions */}
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

        {/* Project Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Типы финансируемых проектов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <div key={project.type} className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.type}
                </h4>
                <div className="space-y-2 mb-4">
                  {project.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-600">
                      • {example}
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-1">Максимальная сумма</div>
                  <div className="text-lg font-bold text-primary-600 mb-2">{project.maxAmount}</div>
                  <div className="text-sm text-gray-500 mb-1">Срок</div>
                  <div className="text-sm font-semibold text-gray-900">{project.term}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Требования к застройщикам
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
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Готовы получить финансирование?
              </h4>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для обсуждения вашего проекта
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

export default ConstructionConditions
