'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, TrendingUp, Calendar } from 'lucide-react'

const InvestorTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Айбек Абдуллаев',
      role: 'Предприниматель',
      investment: '₽5,000,000',
      return: '16%',
      duration: '24 месяца',
      rating: 5,
      text: 'Отличная компания! Инвестировал 5 миллионов и получил стабильную прибыль 16% годовых. Все выплаты приходили вовремя, отчеты были подробными. Рекомендую всем, кто ищет надежные инвестиции.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Мария Петрова',
      role: 'Врач',
      investment: '₽2,000,000',
      return: '14%',
      duration: '18 месяцев',
      rating: 5,
      text: 'Как врач, я ценю надежность и стабильность. Safinat Finance полностью оправдал мои ожидания. Профессиональный подход, прозрачность операций и отличная поддержка клиентов.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Темирлан Кожомбердиев',
      role: 'IT-директор',
      investment: '₽8,000,000',
      return: '17%',
      duration: '30 месяцев',
      rating: 5,
      text: 'Инвестирую уже второй год. Компания показала себя как надежный партнер. Все проекты соответствуют принципам шариата, что для меня очень важно. Доходность превысила ожидания.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Анна Смирнова',
      role: 'Бухгалтер',
      investment: '₽3,000,000',
      return: '15%',
      duration: '20 месяцев',
      rating: 5,
      text: 'Как бухгалтер, я внимательно изучаю все документы. В Safinat Finance все прозрачно и понятно. Ежемесячные отчеты очень подробные, никаких скрытых комиссий. Очень довольна сотрудничеством.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Улугбек Алиев',
      role: 'Инженер',
      investment: '₽4,500,000',
      return: '15%',
      duration: '22 месяца',
      rating: 5,
      text: 'Отличная доходность и полная прозрачность. Персональный менеджер всегда на связи, отвечает на все вопросы. Инвестиции работают стабильно, рекомендую компанию друзьям.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Елена Козлова',
      role: 'Учитель',
      investment: '₽1,500,000',
      return: '13%',
      duration: '15 месяцев',
      rating: 5,
      text: 'Начала с небольшой суммы, чтобы понять, как работает исламское финансирование. Результат превзошел ожидания. Теперь планирую увеличить инвестиции. Спасибо за честность и профессионализм!',
      avatar: '/api/placeholder/80/80'
    }
  ]

  const stats = [
    { label: 'Довольных инвесторов', value: '500+' },
    { label: 'Средняя доходность', value: '15.2%' },
    { label: 'Успешных проектов', value: '98%' },
    { label: 'Лет на рынке', value: '5+' }
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
            Отзывы наших инвесторов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории успеха наших клиентов
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-400 transition-colors duration-300" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Investment Info */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Инвестиция</div>
                    <div className="font-semibold text-gray-900">{testimonial.investment}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Доходность</div>
                    <div className="font-semibold text-primary-600">{testimonial.return}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Срок</div>
                    <div className="font-semibold text-gray-900">{testimonial.duration}</div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-semibold text-sm">Успешно</span>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Станьте следующим успешным инвестором
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к сотням довольных клиентов и начните получать стабильную прибыль
            </p>
            <a href="#consultation" className="btn-primary">
              Начать инвестировать
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestorTestimonials
