'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react'

const ConstructionCTA = () => {
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
      description: 'construction@safinat.finance',
      action: 'mailto:construction@safinat.finance',
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
    'Анализ вашего проекта',
    'Индивидуальные условия',
    'Быстрое рассмотрение'
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
            Получите финансирование для вашего проекта
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Свяжитесь с нами для обсуждения условий финансирования 
            вашего строительного проекта
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

          {/* Construction Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Заявка на финансирование
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название компании *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="Название вашей компании"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Контактное лицо *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="Ваше имя"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип проекта *
                </label>
                <select className="input-field" required>
                  <option value="">Выберите тип проекта</option>
                  <option value="residential">Жилая недвижимость</option>
                  <option value="commercial">Коммерческая недвижимость</option>
                  <option value="office">Офисная недвижимость</option>
                  <option value="infrastructure">Инфраструктурные проекты</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сумма финансирования *
                </label>
                <select className="input-field" required>
                  <option value="">Выберите сумму</option>
                  <option value="10-50">₽10,000,000 - ₽50,000,000</option>
                  <option value="50-100">₽50,000,000 - ₽100,000,000</option>
                  <option value="100-200">₽100,000,000 - ₽200,000,000</option>
                  <option value="200+">₽200,000,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Срок реализации проекта
                </label>
                <select className="input-field">
                  <option value="">Выберите срок</option>
                  <option value="12">12 месяцев</option>
                  <option value="18">18 месяцев</option>
                  <option value="24">24 месяца</option>
                  <option value="30">30 месяцев</option>
                  <option value="36">36 месяцев</option>
                  <option value="48">48 месяцев</option>
                  <option value="60">60 месяцев</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Описание проекта
                </label>
                <textarea
                  rows={4}
                  className="input-field"
                  placeholder="Расскажите о вашем проекте, его особенностях и преимуществах..."
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
              <div className="text-3xl font-bold text-white mb-2">3-5 дней</div>
              <div className="text-primary-100">Рассмотрение заявки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">80%</div>
              <div className="text-primary-100">От стоимости проекта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">12%+</div>
              <div className="text-primary-100">Ставка финансирования</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-primary-100">Успешных проектов</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConstructionCTA
