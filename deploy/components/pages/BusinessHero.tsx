'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, TrendingUp, Shield, Users, ArrowRight } from 'lucide-react'

const BusinessHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Building2,
      title: 'Развитие бизнеса',
      description: 'Финансирование для расширения и модернизации'
    },
    {
      icon: TrendingUp,
      title: 'Оборотные средства',
      description: 'Поддержка текущих операций и закупок'
    },
    {
      icon: Shield,
      title: 'Соответствие шариату',
      description: '100% соответствие исламским принципам'
    },
    {
      icon: Users,
      title: 'Экспертная поддержка',
      description: 'Консультации по исламскому финансированию'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-islamic-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Исламское финансирование
              <span className="text-gradient block">для вашего бизнеса</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Развивайте свой бизнес с помощью исламских финансовых инструментов. 
              Мурабаха, иджара и другие продукты, соответствующие принципам шариата. 
              Прозрачные условия, справедливые ставки, быстрые решения.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#application" className="btn-primary inline-flex items-center justify-center group">
                Подать заявку
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="/calculator" className="btn-secondary inline-flex items-center justify-center">
                Рассчитать условия
              </a>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center h-full"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BusinessHero
