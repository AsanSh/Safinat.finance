'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      primary: '+996 999 569 669',
      secondary: 'Пн-Пт: 9:00-18:00',
      action: 'tel:+996999569669',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'partners@safinat.finance',
      secondary: 'Ответим в течение часа',
      action: 'mailto:partners@safinat.finance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      primary: 'г. Бишкек',
      secondary: 'Кыргызстан',
      action: '#map',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      primary: 'Пн-Пт: 9:00-18:00',
      secondary: 'Сб: 10:00-16:00',
      action: null,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+996 999 569 669',
      secondary: 'Быстрая связь',
      action: 'https://wa.me/996999569669',
      color: 'from-green-600 to-green-700'
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
            Контактная информация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                
                <div className="text-lg font-bold text-primary-600 mb-2">
                  {contact.primary}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {contact.secondary}
                </p>
              </motion.div>
            )

            return contact.action ? (
              <a key={contact.title} href={contact.action} className="block">
                {content}
              </a>
            ) : (
              <div key={contact.title}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
