'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const ApplicationForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    type: 'investor' // investor или business
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Здесь будет отправка данных на сервер
      await new Promise(resolve => setTimeout(resolve, 2000)) // Имитация отправки
      
      toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        type: 'investor'
      })
    } catch (error) {
      toast.error('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-12 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-secondary-600 mb-6">
                Спасибо за ваш интерес к Safinat Finance. Наш менеджер свяжется с вами в течение 24 часов для обсуждения деталей.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Отправить еще одну заявку
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Оставьте заявку и получите персональную консультацию по исламскому финансированию
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Почему выбирают нас?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">100% соответствие Шариату</h4>
                    <p className="text-white/80 text-sm">Все наши продукты полностью соответствуют исламским принципам финансирования</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Быстрое рассмотрение</h4>
                    <p className="text-white/80 text-sm">Рассматриваем заявки в течение 24-48 часов с минимальным пакетом документов</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Прозрачные условия</h4>
                    <p className="text-white/80 text-sm">Четкие условия без скрытых комиссий и дополнительных платежей</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Персональный подход</h4>
                    <p className="text-white/80 text-sm">Индивидуальные условия для каждого клиента и проекта</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-3">
                    Я хочу:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`relative cursor-pointer rounded-lg p-4 border-2 transition-all ${
                      formData.type === 'investor' 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-secondary-200 hover:border-secondary-300'
                    }`}>
                      <input
                        type="radio"
                        name="type"
                        value="investor"
                        checked={formData.type === 'investor'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-sm font-medium text-secondary-900">Стать инвестором</div>
                        <div className="text-xs text-secondary-600 mt-1">Получать доходность</div>
                      </div>
                    </label>
                    <label className={`relative cursor-pointer rounded-lg p-4 border-2 transition-all ${
                      formData.type === 'business' 
                        ? 'border-primary-600 bg-primary-50' 
                        : 'border-secondary-200 hover:border-secondary-300'
                    }`}>
                      <input
                        type="radio"
                        name="type"
                        value="business"
                        checked={formData.type === 'business'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-sm font-medium text-secondary-900">Получить финансирование</div>
                        <div className="text-xs text-secondary-600 mt-1">Для бизнеса</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Имя *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Телефон *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+996 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Сообщение
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-secondary-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Расскажите о ваших целях и потребностях..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:from-secondary-400 disabled:to-secondary-500 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-secondary-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForm
