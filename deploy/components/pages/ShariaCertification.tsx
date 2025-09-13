'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield, Users, CheckCircle } from 'lucide-react'

const ShariaCertification = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      icon: Award,
      title: 'Сертификация AAOIFI',
      description: 'Соответствие стандартам Организации по бухгалтерскому учету и аудиту исламских финансовых институтов',
      status: 'Сертифицировано'
    },
    {
      icon: Shield,
      title: 'Шариатский совет',
      description: 'Наши продукты проверены и одобрены независимым шариатским советом',
      status: 'Одобрено'
    },
    {
      icon: Users,
      title: 'Экспертная оценка',
      description: 'Регулярные аудиты и консультации с ведущими экспертами исламского финансирования',
      status: 'Проверено'
    },
    {
      icon: CheckCircle,
      title: 'Соответствие стандартам',
      description: 'Полное соответствие международным стандартам исламского финансирования',
      status: 'Соответствует'
    }
  ]

  const standards = [
    'AAOIFI (Организация по бухгалтерскому учету и аудиту исламских финансовых институтов)',
    'IFSB (Совет по исламским финансовым услугам)',
    'IIFM (Международная ассоциация исламских финансовых рынков)',
    'Международные стандарты шариатского соответствия'
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
            Наше шариатское
            <span className="text-gradient block">сертификация</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша модель сертифицирована ведущими экспертами шариатского соответствия. 
            Это отражает нашу непоколебимую приверженность этическим финансовым практикам.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center h-full"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Standards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Соответствие международным стандартам
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Наши продукты и услуги соответствуют всем основным международным стандартам 
              исламского финансирования и регулярно проходят независимую проверку.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Вы в надежных руках
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Лет опыта в исламском финансировании</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Успешных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Соответствие шариату</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShariaCertification
