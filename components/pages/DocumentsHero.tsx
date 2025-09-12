'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Shield, Award } from 'lucide-react'

const DocumentsHero = () => {
  const features = [
    {
      icon: FileText,
      title: 'Договоры',
      description: 'Типовые договоры'
    },
    {
      icon: Download,
      title: 'Заявки',
      description: 'Формы заявок'
    },
    {
      icon: Shield,
      title: 'Лицензии',
      description: 'Официальные документы'
    },
    {
      icon: Award,
      title: 'Сертификаты',
      description: 'Подтверждения качества'
    }
  ]

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-islamic-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Документы и
              <span className="text-gradient block">информация</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Все необходимые документы, лицензии, договоры и ответы на 
              часто задаваемые вопросы в одном месте.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#documents" className="btn-primary">
                Скачать документы
              </a>
              <a href="#faq" className="btn-secondary">
                FAQ
              </a>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DocumentsHero
