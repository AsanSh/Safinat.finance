'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Clock, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react'

const TechnologyFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Smartphone,
      title: 'Мобильное приложение',
      description: 'Управляйте финансами в любое время и в любом месте через наше мобильное приложение',
      benefits: [
        'Просмотр баланса в реальном времени',
        'Быстрые переводы и платежи',
        'Уведомления о транзакциях',
        'Биометрическая аутентификация'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Банковская безопасность',
      description: 'Многоуровневая защита ваших средств и персональных данных',
      benefits: [
        '256-bit SSL шифрование',
        'Двухфакторная аутентификация',
        'Мониторинг подозрительных операций',
        'Страхование депозитов'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Мгновенные операции',
      description: 'Быстрые и надежные финансовые операции 24/7',
      benefits: [
        'Обработка заявок за 2 минуты',
        'Мгновенные переводы',
        'Автоматическое одобрение',
        'Круглосуточная работа'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Мультивалютность',
      description: 'Работа с сомами и долларами в одном интерфейсе',
      benefits: [
        'Автоматический пересчет валют',
        'Актуальные курсы валют',
        'Конвертация без комиссий',
        'История операций'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const stats = [
    { icon: Clock, value: '< 2 мин', label: 'Время обработки заявки' },
    { icon: Shield, value: '256-bit', label: 'Уровень шифрования' },
    { icon: Globe, value: '24/7', label: 'Доступность сервиса' },
    { icon: CheckCircle, value: '99.9%', label: 'Надежность системы' }
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
            Современные технологии
            <span className="text-gradient block">для вашего удобства</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы используем передовые технологии для обеспечения быстрого, 
            безопасного и удобного доступа к исламским финансовым услугам
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-islamic-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Наши технологические показатели
            </h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Мы гордимся нашими достижениями в области технологий и безопасности
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Безопасность превыше всего
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы используем самые современные технологии защиты данных и средств наших клиентов. 
                Наша система соответствует международным стандартам банковской безопасности.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Сертификат SSL 256-bit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Соответствие PCI DSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Регулярные аудиты безопасности</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Готовы начать?
              </h4>
              <p className="text-gray-600 mb-6">
                Скачайте наше мобильное приложение и получите доступ к исламским 
                финансовым услугам прямо сейчас.
              </p>
              
              <div className="space-y-3">
                <button className="w-full btn-primary flex items-center justify-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Скачать приложение
                </button>
                <button className="w-full btn-secondary flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Открыть веб-версию
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyFeatures
