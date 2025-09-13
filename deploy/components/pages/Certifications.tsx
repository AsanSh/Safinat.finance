'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield, FileText, Globe } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      icon: Award,
      title: 'Лицензия НБКР',
      description: 'Официальная лицензия Национального банка Кыргызской Республики на осуществление финансовой деятельности',
      issuer: 'Национальный банк КР',
      date: '2019',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Сертификат шариата',
      description: 'Сертификат соответствия принципам исламского финансирования от Исламского центра Кыргызстана',
      issuer: 'Исламский центр КР',
      date: '2019',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Международная сертификация',
      description: 'Сертификат соответствия международным стандартам исламского финансирования',
      issuer: 'AAOIFI',
      date: '2022',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'ISO 9001:2015',
      description: 'Сертификат системы менеджмента качества в соответствии с международными стандартами',
      issuer: 'ISO',
      date: '2021',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const memberships = [
    'Ассоциация исламских банков Кыргызстана',
    'Международная ассоциация исламского финансирования',
    'Торгово-промышленная палата КР',
    'Ассоциация развития финансового рынка'
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
            Сертификаты и лицензии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подтверждение качества наших услуг и соответствия международным стандартам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Выдано: {cert.issuer}</span>
                        <span className="text-primary-600 font-medium">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Членство в ассоциациях
            </h3>
            <p className="text-gray-600">
              Мы являемся активными членами ведущих профессиональных организаций
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memberships.map((membership, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                <span className="text-gray-700">{membership}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
