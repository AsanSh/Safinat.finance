'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, TrendingUp, Calendar, MapPin } from 'lucide-react'

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      id: 1,
      title: 'Жилой комплекс "Зеленые холмы"',
      location: 'г. Бишкек',
      type: 'Жилая недвижимость',
      investment: '₽150,000,000',
      return: '18%',
      duration: '24 месяца',
      description: 'Финансирование строительства элитного жилого комплекса в центре Бишкека. Проект включал 200 квартир и коммерческие помещения.',
      image: '/api/placeholder/400/300',
      status: 'Завершен',
      results: [
        'Полная окупаемость за 20 месяцев',
        'Превышение плановой доходности на 2%',
        '100% продажа квартир до завершения строительства'
      ]
    },
    {
      id: 2,
      title: 'Торговый центр "Азия Молл"',
      location: 'г. Ош',
      type: 'Коммерческая недвижимость',
      investment: '₽300,000,000',
      return: '16%',
      duration: '36 месяцев',
      description: 'Строительство крупного торгового центра с кинотеатром, ресторанами и парковкой на 500 мест.',
      image: '/api/placeholder/400/300',
      status: 'В процессе',
      results: [
        'Стабильная арендная доходность',
        'Высокая загрузка торговых площадей',
        'Планируемое расширение'
      ]
    },
    {
      id: 3,
      title: 'Офисный комплекс "Бизнес Плаза"',
      location: 'г. Бишкек',
      type: 'Офисная недвижимость',
      investment: '₽200,000,000',
      return: '15%',
      duration: '30 месяцев',
      description: 'Современный офисный комплекс класса А с конференц-залами и бизнес-центром.',
      image: '/api/placeholder/400/300',
      status: 'Завершен',
      results: [
        '100% заселенность офисов',
        'Долгосрочные арендные договоры',
        'Высокий уровень сервиса'
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
            Успешные кейсы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные примеры успешных инвестиций в недвижимость 
            через исламское финансирование
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
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
                      study.status === 'Завершен' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {study.location}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {study.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{study.return}</div>
                      <div className="text-sm text-gray-600">Доходность</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{study.duration}</div>
                      <div className="text-sm text-gray-600">Срок</div>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Инвестиция</div>
                      <div className="text-lg font-semibold text-gray-900">{study.investment}</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Результаты:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
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
              Хотите стать частью успешных проектов?
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к нашим инвесторам и получайте стабильную прибыль
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/investors" className="btn-primary">
                Для инвесторов
              </a>
              <a href="/construction" className="btn-secondary">
                Для застройщиков
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
