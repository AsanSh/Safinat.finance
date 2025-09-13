'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, GraduationCap, Briefcase } from 'lucide-react'

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: 'Айбек Абдуллаев',
      position: 'Генеральный директор',
      experience: '15 лет в исламском финансировании',
      education: 'МБА, Исламский университет',
      description: 'Эксперт в области исламского финансирования с многолетним опытом работы в международных банках.',
      avatar: '/api/placeholder/200/200'
    },
    {
      name: 'Мария Петрова',
      position: 'Финансовый директор',
      experience: '12 лет в финансовом секторе',
      education: 'CFA, Финансовая академия',
      description: 'Специалист по управлению рисками и финансовому планированию с международным опытом.',
      avatar: '/api/placeholder/200/200'
    },
    {
      name: 'Темирлан Кожомбердиев',
      position: 'Директор по развитию',
      experience: '10 лет в девелопменте',
      education: 'Магистр экономики, КНУ',
      description: 'Эксперт по недвижимости и строительным проектам с глубоким пониманием рынка Кыргызстана.',
      avatar: '/api/placeholder/200/200'
    },
    {
      name: 'Анна Смирнова',
      position: 'Юридический директор',
      experience: '8 лет в корпоративном праве',
      education: 'Юридический факультет, КНУ',
      description: 'Специалист по исламскому праву и корпоративному законодательству Кыргызстана.',
      avatar: '/api/placeholder/200/200'
    }
  ]

  const teamStats = [
    { icon: Users, value: '25+', label: 'Специалистов' },
    { icon: Award, value: '50+', label: 'Сертификатов' },
    { icon: GraduationCap, value: '15+', label: 'Лет опыта' },
    { icon: Briefcase, value: '500+', label: 'Проектов' }
  ]

  return (
    <section id="team" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы с многолетним опытом в исламском финансировании
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Avatar */}
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-500">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {member.experience}
                    </div>
                    <div className="flex items-center justify-center text-gray-500">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {member.education}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Философия команды
              </h3>
              <p className="text-gray-600">
                Наши принципы работы и подход к клиентам
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Коллективная работа</h4>
                <p className="text-gray-600 text-sm">
                  Мы работаем как единая команда, объединенная общими целями и ценностями
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Постоянное развитие</h4>
                <p className="text-gray-600 text-sm">
                  Непрерывное обучение и повышение квалификации всех членов команды
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Экспертность</h4>
                <p className="text-gray-600 text-sm">
                  Глубокие знания в области исламского финансирования и местного рынка
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
