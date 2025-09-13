'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Clock, 
  Shield, 
  DollarSign, 
  FileText, 
  Users, 
  TrendingUp,
  CheckCircle,
  Award
} from 'lucide-react'

const ConstructionBenefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Clock,
      title: 'Быстрое рассмотрение',
      description: 'Рассмотрение заявки в течение 3-5 рабочих дней',
      details: [
        'Упрощенная процедура подачи документов',
        'Экспресс-анализ проекта',
        'Быстрое принятие решения'
      ]
    },
    {
      icon: Shield,
      title: 'Надежное партнерство',
      description: 'Долгосрочное сотрудничество с проверенными застройщиками',
      details: [
        'Стабильные условия финансирования',
        'Поддержка на всех этапах проекта',
        'Гибкие условия погашения'
      ]
    },
    {
      icon: DollarSign,
      title: 'Выгодные условия',
      description: 'Конкурентные ставки и индивидуальные условия',
      details: [
        'Ставки от 12% годовых',
        'Индивидуальные условия для каждого проекта',
        'Отсутствие скрытых комиссий'
      ]
    },
    {
      icon: FileText,
      title: 'Минимум документов',
      description: 'Упрощенный документооборот и быстрая проверка',
      details: [
        'Базовый пакет документов',
        'Онлайн-подача заявки',
        'Быстрая проверка документов'
      ]
    },
    {
      icon: Users,
      title: 'Персональный менеджер',
      description: 'Индивидуальный подход и постоянная поддержка',
      details: [
        'Персональный менеджер проекта',
        'Консультации на всех этапах',
        'Техническая поддержка'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Гибкие сроки',
      description: 'Адаптируемся под сроки вашего проекта',
      details: [
        'Сроки от 12 до 60 месяцев',
        'Гибкий график погашения',
        'Возможность досрочного погашения'
      ]
    }
  ]

  const advantages = [
    'Финансирование до 80% от стоимости проекта',
    'Отсутствие требований к залогу недвижимости',
    'Возможность рефинансирования',
    'Поддержка на всех этапах строительства',
    'Консультации по оптимизации проекта',
    'Помощь в получении разрешений'
  ]

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
            Преимущества сотрудничества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему застройщики выбирают именно нас для финансирования своих проектов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Дополнительные преимущества
            </h3>
            <p className="text-gray-600">
              Что еще получают наши партнеры-застройщики
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConstructionBenefits
