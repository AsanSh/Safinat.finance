'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Search, UserCheck, Building2, CheckCircle, Clock } from 'lucide-react'

const BusinessProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '1',
      icon: FileText,
      title: 'Подача заявки',
      description: 'Заполните онлайн-заявку с указанием суммы и цели финансирования',
      details: [
        'Онлайн-форма за 5 минут',
        'Без визита в офис',
        'Мгновенная отправка'
      ]
    },
    {
      number: '2',
      icon: Search,
      title: 'Рассмотрение заявки',
      description: 'Наши эксперты изучают вашу заявку и оценивают бизнес-план',
      details: [
        'Анализ бизнес-модели',
        'Оценка рисков',
        'Проверка документов'
      ]
    },
    {
      number: '3',
      icon: UserCheck,
      title: 'Встреча с экспертом',
      description: 'Личная встреча для обсуждения условий и подписания договора',
      details: [
        'Консультация по шариату',
        'Обсуждение условий',
        'Подписание договора'
      ]
    },
    {
      number: '4',
      icon: Building2,
      title: 'Получение финансирования',
      description: 'Перечисление средств на ваш счет в соответствии с договором',
      details: [
        'Быстрое перечисление',
        'Прозрачные условия',
        'Поддержка на всех этапах'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Как получить финансирование
            <span className="text-gradient block">для вашего бизнеса</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс получения исламского финансирования 
            для развития вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
                )}

                <div className="card h-full text-center relative z-10">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-islamic-50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Время рассмотрения
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              От подачи заявки до получения финансирования проходит всего 
              <span className="font-semibold text-primary-600"> 3-5 рабочих дней</span>. 
              Мы ценим ваше время и работаем максимально быстро.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessProcess
