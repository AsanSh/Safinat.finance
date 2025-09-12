'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, TrendingUp } from 'lucide-react'

const AboutHero = () => {
  const stats = [
    {
      icon: Shield,
      title: '5+ лет',
      description: 'На рынке'
    },
    {
      icon: Users,
      title: '500+',
      description: 'Довольных клиентов'
    },
    {
      icon: Award,
      title: '100%',
      description: 'Соответствие шариату'
    },
    {
      icon: TrendingUp,
      title: '₽2.5Б',
      description: 'Объем финансирования'
    }
  ]

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-islamic-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              О компании
              <span className="text-gradient block">Safinat Finance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Мы — ведущий провайдер исламского финансирования в Кыргызстане, 
              предоставляющий качественные финансовые решения в соответствии 
              с принципами шариата с 2019 года.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Наша миссия — сделать исламское финансирование доступным и понятным 
              для всех, кто стремится к этичным и прибыльным инвестициям.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#mission" className="btn-primary">
                Наша миссия
              </a>
              <a href="#team" className="btn-secondary">
                Команда
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
