'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, UserCheck, TrendingUp, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: FileText,
      title: 'Подача заявки',
      description: 'Заполните заявку на нашем сайте или обратитесь к нашим специалистам',
      details: [
        'Онлайн-заявка',
        'Консультация',
        'Анализ документов'
      ]
    },
    {
      icon: UserCheck,
      title: 'Заключение договора',
      description: 'Подписываем договор мурабаха в соответствии с принципами шариата',
      details: [
        'Проверка соответствия',
        'Подписание договора',
        'Начало сотрудничества'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Получение прибыли',
      description: 'Получайте стабильную прибыль от ваших инвестиций',
      details: [
        'Регулярные выплаты',
        'Отчетность',
        'Контроль рисков'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Завершение сделки',
      description: 'Успешное завершение проекта с получением всех доходов',
      details: [
        'Финальные расчеты',
        'Возврат инвестиций',
        'Документооборот'
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Как это работает
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс инвестирования в соответствии 
            с принципами исламского финансирования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-100 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="card text-center h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Готовы начать инвестировать?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для получения персональной консультации
            </p>
            <a href="/contacts" className="btn-primary">
              Получить консультацию
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
