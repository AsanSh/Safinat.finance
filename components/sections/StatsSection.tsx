'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, DollarSign, TrendingUp, Globe } from 'lucide-react'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: Users,
      value: '2,000+',
      label: 'активных инвесторов Safinat, которые доверяют нам свои инвестиции',
      color: 'text-blue-500'
    },
    {
      icon: DollarSign,
      value: '$160M+',
      label: 'инвестировано в соответствии с ценностями наших клиентов',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      value: '$20B',
      'label': 'управляется нашими партнерскими управляющими фондами',
      color: 'text-purple-500'
    },
    {
      icon: Globe,
      value: '100+',
      label: 'инвестиций завершено',
      color: 'text-orange-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
