'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactsHero = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+996 999 569 669',
      description: 'Пн-Пт: 9:00-18:00',
      action: 'tel:+996999569669'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@safinat.finance',
      description: 'Ответим в течение часа',
      action: 'mailto:info@safinat.finance'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'г. Бишкек, ул. Чуй 123',
      description: 'Кыргызстан, 720000',
      action: '#map'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      value: 'Пн-Пт: 9:00-18:00',
      description: 'Сб: 10:00-16:00',
      action: null
    }
  ]

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-islamic-50">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы ответить на ваши вопросы и предоставить персональную консультацию 
            по исламскому финансированию
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                
                <div className="text-xl font-bold text-primary-600 mb-2">
                  {method.value}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </motion.div>
            )

            return method.action ? (
              <a key={method.title} href={method.action} className="block">
                {content}
              </a>
            ) : (
              <div key={method.title}>
                {content}
              </div>
            )
          })}
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Нужна срочная консультация?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами прямо сейчас для получения персональной консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+996999569669" className="btn-primary">
                Позвонить сейчас
              </a>
              <a href="https://wa.me/996312123456" className="btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactsHero
