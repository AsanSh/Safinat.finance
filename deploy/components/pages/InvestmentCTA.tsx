'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react'

const InvestmentCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Позвонить',
      description: '+996 999 569 669',
      action: 'tel:+996999569669',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Написать',
      description: 'invest@safinat.finance',
      action: 'mailto:invest@safinat.finance',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Быстрая связь',
      action: 'https://wa.me/996312123456',
      color: 'from-green-600 to-green-700'
    }
  ]

  const benefits = [
    'Персональная консультация',
    'Индивидуальные условия',
    'Быстрое оформление',
    'Полная поддержка'
  ]

  return (
    <section id="consultation" ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-islamic-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать инвестировать?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Получите персональную консультацию и узнайте, как начать получать 
            стабильную прибыль от 12% до 18% годовых
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Свяжитесь с нами удобным способом
            </h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{method.title}</h4>
                    <p className="text-primary-100">{method.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              )
            })}

            {/* Benefits */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Что вы получите:</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Investment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Заявка на инвестирование
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
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
                    required
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
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сумма инвестиции *
                </label>
                <select className="input-field" required>
                  <option value="">Выберите сумму</option>
                  <option value="1000000-4999999">₽1,000,000 - ₽4,999,999 (Базовый)</option>
                  <option value="5000000-9999999">₽5,000,000 - ₽9,999,999 (Премиум)</option>
                  <option value="10000000+">₽10,000,000+ (VIP)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Предпочтительный срок
                </label>
                <select className="input-field">
                  <option value="">Выберите срок</option>
                  <option value="12">12 месяцев</option>
                  <option value="18">18 месяцев</option>
                  <option value="24">24 месяца</option>
                  <option value="30">30 месяцев</option>
                  <option value="36">36 месяцев</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Опыт инвестирования
                </label>
                <select className="input-field">
                  <option value="">Выберите опыт</option>
                  <option value="beginner">Начинающий</option>
                  <option value="intermediate">Средний</option>
                  <option value="advanced">Опытный</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  rows={4}
                  className="input-field"
                  placeholder="Расскажите о ваших инвестиционных целях..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Отправить заявку
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

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Поддержка инвесторов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1-2 дня</div>
              <div className="text-primary-100">Рассмотрение заявки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-100">Соответствие шариату</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Довольных инвесторов</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentCTA
