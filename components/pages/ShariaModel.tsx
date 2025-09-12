'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, UserCheck, TrendingUp, CheckCircle } from 'lucide-react'

const ShariaModel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '1',
      icon: Building2,
      title: 'Мы приобретаем актив',
      description: 'Safinat Finance покупает недвижимость или оборудование, которое вы выбрали для вашего проекта.',
      details: [
        'Покупка реального актива',
        'Полное право собственности',
        'Прозрачная оценка стоимости'
      ]
    },
    {
      number: '2',
      icon: UserCheck,
      title: 'Заключаем договор мурабаха',
      description: 'Продаем вам актив по договору мурабаха с согласованной наценкой, которая известна заранее.',
      details: [
        'Согласованная наценка',
        'Прозрачные условия',
        'Соответствие шариату'
      ]
    },
    {
      number: '3',
      icon: TrendingUp,
      title: 'Вы получаете прибыль',
      description: 'Используете актив для получения дохода, выплачивая нам согласованные платежи.',
      details: [
        'Регулярные платежи',
        'Использование актива',
        'Получение дохода'
      ]
    },
    {
      number: '4',
      icon: CheckCircle,
      title: 'Становитесь владельцем',
      description: 'После завершения всех платежей актив полностью переходит в вашу собственность.',
      details: [
        'Полное право собственности',
        'Никаких дополнительных платежей',
        'Передача документов'
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
            Как работает наша модель
            <span className="text-gradient block">шариатского финансирования</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша модель мурабаха (Murabaha) спроектирована для 100% соответствия шариату
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="card h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-primary-600 mr-3">
                            {step.number}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
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
                  </div>
                </div>

                {/* Visual Element */}
                <div className="w-full lg:w-80 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary-600" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Ключевые особенности нашей шариатской модели
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Нет процентов</h4>
              <p className="text-sm text-gray-600">Мы не взимаем проценты с ваших платежей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Нет штрафов</h4>
              <p className="text-sm text-gray-600">Никаких штрафов за просрочку и скрытых комиссий</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Нет неопределенности</h4>
              <p className="text-sm text-gray-600">Все условия четко определены и прозрачны</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Финансирование под активы</h4>
              <p className="text-sm text-gray-600">Ваши платежи привязаны к реальному активу</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShariaModel
