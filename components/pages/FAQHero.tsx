'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HelpCircle, Search, MessageCircle } from 'lucide-react'

const FAQHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-green-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-8"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Часто задаваемые
            <span className="text-primary-600 block">вопросы</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Найдите ответы на популярные вопросы об исламском финансировании, 
            наших услугах и процессах. Не нашли ответ? Задайте свой вопрос!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 shadow-md"
            >
              <Search className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 font-medium">Поиск по вопросам</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 font-medium">Задать вопрос</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Популярные вопросы</h3>
              <p className="text-gray-600 text-sm">
                Самые частые вопросы наших клиентов с подробными ответами
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Задать вопрос</h3>
              <p className="text-gray-600 text-sm">
                Не нашли ответ? Задайте свой вопрос и получите ответ от экспертов
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Поиск по тегам</h3>
              <p className="text-gray-600 text-sm">
                Найдите вопросы по интересующей вас теме с помощью тегов
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQHero
