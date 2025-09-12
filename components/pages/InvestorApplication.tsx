'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ApplicationForm from '@/components/ApplicationForm'

const InvestorApplication = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="application" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Стать инвестором
            <span className="text-gradient block">займет всего 5 минут</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните простую форму, и мы свяжемся с вами для обсуждения 
            условий инвестирования и подбора оптимального портфеля
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ApplicationForm type="investor" />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Стабильная доходность
            </h3>
            <p className="text-gray-600">
              От 15% до 25% годовых с гарантированными выплатами
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Защита инвестиций
            </h3>
            <p className="text-gray-600">
              Все инвестиции застрахованы и соответствуют шариату
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Экспертная поддержка
            </h3>
            <p className="text-gray-600">
              Профессиональная команда управляет вашими инвестициями
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestorApplication
