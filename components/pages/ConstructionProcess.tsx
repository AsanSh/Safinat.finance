'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Search, UserCheck, Building2, CheckCircle, Clock } from 'lucide-react'

const ConstructionProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: FileText,
      title: 'Подача заявки',
      description: 'Заполните заявку и предоставьте документы',
      duration: '30 минут',
      details: [
        'Заполнение онлайн-формы',
        'Загрузка документов проекта',
        'Предоставление финансовой отчетности'
      ]
    },
    {
      icon: Search,
      title: 'Анализ проекта',
      description: 'Проводим комплексный анализ вашего проекта',
      duration: '1-2 дня',
      details: [
        'Анализ финансового состояния',
        'Оценка проекта и рисков',
        'Проверка документов'
      ]
    },
    {
      icon: UserCheck,
      title: 'Согласование условий',
      description: 'Обсуждаем и согласовываем условия финансирования',
      duration: '1 день',
      details: [
        'Обсуждение условий',
        'Согласование графика',
        'Подготовка договора'
      ]
    },
    {
      icon: Building2,
      title: 'Начало финансирования',
      description: 'Подписываем договор и начинаем финансирование',
      duration: '1 день',
      details: [
        'Подписание договора',
        'Перевод первого транша',
        'Начало мониторинга'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Контроль и поддержка',
      description: 'Постоянный мониторинг и поддержка проекта',
      duration: 'Весь период',
      details: [
        'Регулярные отчеты',
        'Контроль строительства',
        'Консультационная поддержка'
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
            Процесс получения финансирования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и быстрый процесс от подачи заявки до получения средств
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="card h-full text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-center mb-4">
                      <Clock className="w-4 h-4 text-primary-500 mr-2" />
                      <span className="text-sm font-medium text-primary-600">
                        {step.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Готовы получить финансирование?
            </h3>
            <p className="text-gray-600 mb-6">
              Подайте заявку прямо сейчас и получите персональную консультацию
            </p>
            <a href="#consultation" className="btn-primary">
              Подать заявку
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConstructionProcess
