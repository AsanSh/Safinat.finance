'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, MapPin, Calendar, TrendingUp } from 'lucide-react'

const ConstructionExamples = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const examples = [
    {
      title: 'Жилой комплекс "Солнечный"',
      location: 'г. Бишкек',
      type: 'Жилая недвижимость',
      amount: '₽200,000,000',
      duration: '24 месяца',
      description: 'Строительство современного жилого комплекса с 300 квартирами, детским садом и парковкой.',
      features: [
        '300 квартир',
        'Детский сад',
        'Подземная парковка',
        'Спортивная площадка'
      ],
      status: 'Завершен'
    },
    {
      title: 'Торговый центр "Мега"',
      location: 'г. Ош',
      type: 'Коммерческая недвижимость',
      amount: '₽350,000,000',
      duration: '30 месяцев',
      description: 'Крупный торговый центр с кинотеатром, фуд-кортом и парковкой на 800 мест.',
      features: [
        '50,000 м² торговых площадей',
        '8-зальный кинотеатр',
        'Фуд-корт на 500 мест',
        'Парковка на 800 мест'
      ],
      status: 'В процессе'
    },
    {
      title: 'Офисный центр "Бизнес-Парк"',
      location: 'г. Бишкек',
      type: 'Офисная недвижимость',
      amount: '₽150,000,000',
      duration: '18 месяцев',
      description: 'Современный офисный комплекс класса А с конференц-залами и бизнес-центром.',
      features: [
        '20,000 м² офисных площадей',
        'Конференц-залы',
        'Бизнес-центр',
        'Кафе и ресторан'
      ],
      status: 'Завершен'
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
            Примеры финансируемых проектов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные проекты, которые мы успешно профинансировали
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Building className="w-16 h-16 text-primary-600" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      example.status === 'Завершен' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {example.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {example.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {example.location}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {example.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {example.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{example.amount}</div>
                      <div className="text-sm text-gray-600">Сумма</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{example.duration}</div>
                      <div className="text-sm text-gray-600">Срок</div>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Тип проекта</div>
                      <div className="text-sm font-semibold text-gray-900">{example.type}</div>
                    </div>
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Хотите получить финансирование для вашего проекта?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для обсуждения условий финансирования
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

export default ConstructionExamples
