'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Globe, 
  Users, 
  Award, 
  Clock,
  Heart
} from 'lucide-react'

const KeyFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: 'Качественные инвестиции',
      description: 'Через наши глубокие сети мы находим сильные фонды и сотрудничаем с мировыми менеджерами. У нас также есть сильные внутренние фонды, управляемые нашей опытной командой инвестиций.'
    },
    {
      icon: DollarSign,
      title: 'Низкие минимумы',
      description: 'Мы предлагаем доступ к фондам от $5,000 с возможностью рассрочки, что еще больше снижает барьер входа.'
    },
    {
      icon: TrendingUp,
      title: 'Проверенная доходность',
      description: 'Четыре успешных выхода из стартапов принесли инвесторам сильную прибыль, а наш портфель недвижимости продолжает достигать целевых дивидендов 4-7% ежегодно.'
    },
    {
      icon: FileText,
      title: 'Налоговые льготы',
      description: '50-70% инвестиций в стартапы квалифицируются для SEIS/EIS, давая британским инвесторам налоговую скидку 30-50% в первый год.'
    },
    {
      icon: Award,
      title: 'Этика',
      description: 'Мы тщательно проверяем каждую инвестицию на соответствие шариату и этике, при этом 63% нашего венчурного портфеля поддерживает основателей из меньшинств.'
    },
    {
      icon: Globe,
      title: 'Доступ по всему миру',
      description: 'Инвестируйте из любой точки мира, с возможностями, открытыми для резидентов за пределами Великобритании и США.'
    },
    {
      icon: Clock,
      title: 'Гибкость',
      description: 'Многие из наших фондов предлагают планы рассрочки и доступ к пулу ликвидности, с нашими доходными фондами, предоставляющими регулярные окна ликвидности.'
    },
    {
      icon: Heart,
      title: 'Воздействие',
      description: 'Наши инвестиции позволяют бизнесу развиваться, расширяют возможности сообществ и продвигают устойчивое будущее.'
    },
    {
      icon: Users,
      title: 'Дух сообщества',
      description: 'Как часть IFG, мы поддерживаемся крупнейшим мусульманским инвестиционным сообществом в мире.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши ключевые особенности
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="h-full p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300 flex flex-col">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
