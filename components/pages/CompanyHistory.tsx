'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, TrendingUp, Users, Award } from 'lucide-react'

const CompanyHistory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      year: '2019',
      title: 'Основание компании',
      description: 'Safinat Finance была основана с целью предоставления качественных исламских финансовых услуг в Кыргызстане.',
      icon: Calendar,
      achievements: ['Получение лицензии', 'Формирование команды', 'Разработка продуктов']
    },
    {
      year: '2020',
      title: 'Первый успешный проект',
      description: 'Завершение первого крупного проекта финансирования жилого комплекса в Бишкеке.',
      icon: TrendingUp,
      achievements: ['₽50М первый проект', '10 довольных клиентов', '100% возврат инвестиций']
    },
    {
      year: '2021',
      title: 'Расширение деятельности',
      description: 'Расширение портфеля услуг и увеличение команды специалистов.',
      icon: Users,
      achievements: ['50+ проектов', '100+ клиентов', '₽500М объем финансирования']
    },
    {
      year: '2022',
      title: 'Международное признание',
      description: 'Вступление в международные ассоциации исламского финансирования.',
      icon: Award,
      achievements: ['Международная сертификация', '200+ проектов', '₽1Б объем финансирования']
    },
    {
      year: '2023',
      title: 'Лидерство на рынке',
      description: 'Становление ведущим провайдером исламского финансирования в регионе.',
      icon: TrendingUp,
      achievements: ['300+ проектов', '400+ клиентов', '₽1.5Б объем финансирования']
    },
    {
      year: '2024',
      title: 'Инновации и развитие',
      description: 'Внедрение новых технологий и расширение географии деятельности.',
      icon: Award,
      achievements: ['500+ проектов', '500+ клиентов', '₽2.5Б объем финансирования']
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
            История компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Путь развития от небольшой компании до лидера рынка исламского финансирования
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for odd items */}
                  {!isEven && <div className="hidden lg:block w-5/12" />}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Текущие достижения
              </h3>
              <p className="text-gray-600">
                Результаты нашей работы на сегодняшний день
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Успешных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">₽2.5Б</div>
                <div className="text-gray-600">Объем финансирования</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyHistory
