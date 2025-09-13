'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const ClientTestimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Абдул-Рахман Аббас',
      role: 'Инвестор Cur8, Соучредитель Pillars',
      avatar: '/api/placeholder/60/60',
      content: 'Когда дело доходит до моих инвестиций, я всегда пытался построить сбалансированный портфель, но найти первоклассные альтернативные активы, которые также соответствуют шариату, может быть сложно. Эти качественные сделки часто очень трудно получить доступ.',
      rating: 5
    },
    {
      name: 'Майур Джетхва',
      role: 'Бывший глава Cash Equities, Bank of America Merrill Lynch',
      avatar: '/api/placeholder/60/60',
      content: 'Cur8 - лучшая инвестиционная платформа в этой области на мой взгляд. Широта возможностей, тщательная проверка и прозрачность обеспечивают сильный инвестиционный процесс и душевное спокойствие.',
      rating: 5
    },
    {
      name: 'Ризван Халид',
      role: 'Инвестор Cur8, MD, Euro Quality Lambs',
      avatar: '/api/placeholder/60/60',
      content: 'Отличные управляющие активами, которые сочетают производительность с воздействием. Мы очень довольны ценностями, коммуникациями и результатами cur8.',
      rating: 5
    },
    {
      name: 'Мартин Жауни',
      role: 'Основатель, Funding Souq',
      avatar: '/api/placeholder/60/60',
      content: 'IFG имеет глубокие корни в экосистеме стартапов Великобритании, и они были невероятны в том, чтобы связать нас с инвесторами, наставниками, бухгалтерами и всем остальным, о чем мы просили.',
      rating: 5
    },
    {
      name: 'Ахмед Аль-Рашид',
      role: 'Инвестор, Технологический предприниматель',
      avatar: '/api/placeholder/60/60',
      content: 'Safinat Finance предоставила мне возможность инвестировать в соответствии с моими исламскими ценностями, не жертвуя доходностью. Их команда профессионалов и прозрачный подход заслуживают доверия.',
      rating: 5
    },
    {
      name: 'Фатима Хасан',
      role: 'Инвестор, Финансовый консультант',
      avatar: '/api/placeholder/60/60',
      content: 'Как мусульманский инвестор, я искала платформу, которая понимает мои потребности. Safinat Finance не только соответствует шариату, но и предоставляет отличные инвестиционные возможности.',
      rating: 5
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-green-400 mb-4" />
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials
