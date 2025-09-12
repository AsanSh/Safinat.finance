'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Здесь будет логика отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000)) // Имитация отправки
      
      toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
      
      // Сброс формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      toast.error('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+996 (___) ___-___"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Интересующая услуга
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Выберите услугу</option>
                  <option value="investment">Инвестирование</option>
                  <option value="construction">Финансирование строительства</option>
                  <option value="consultation">Консультация</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Расскажите о ваших потребностях..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="loading-spinner mr-2" />
                    Отправляем...
                  </div>
                ) : (
                  'Отправить заявку'
                )}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/documents" className="text-primary-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
