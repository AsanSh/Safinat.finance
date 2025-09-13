'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  FileText, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Phone, 
  Briefcase,
  Shield,
  UserCheck
} from 'lucide-react'

const AboutMindMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const mindMapData = {
    center: {
      title: 'О нас',
      description: 'Safinat Finance'
    },
    branches: [
      {
        id: 'documents',
        title: 'Документы',
        icon: FileText,
        href: '/documents',
        color: 'from-blue-500 to-blue-600',
        hoverColor: 'from-blue-600 to-blue-700'
      },
      {
        id: 'team',
        title: 'Наша команда',
        icon: Users,
        href: '/about#team',
        color: 'from-green-500 to-green-600',
        hoverColor: 'from-green-600 to-green-700',
        subBranches: [
          {
            id: 'sharia-council',
            title: 'Шариатский совет',
            icon: Shield,
            href: '/sharia-compliance',
            color: 'from-emerald-500 to-emerald-600'
          },
          {
            id: 'our-team',
            title: 'Мы',
            icon: UserCheck,
            href: '/about#our-team',
            color: 'from-teal-500 to-teal-600'
          }
        ]
      },
      {
        id: 'money',
        title: 'Как мы делаем деньги',
        icon: TrendingUp,
        href: '/about#business-model',
        color: 'from-purple-500 to-purple-600',
        hoverColor: 'from-purple-600 to-purple-700'
      },
      {
        id: 'mistakes',
        title: 'Наши ошибки',
        icon: AlertTriangle,
        href: '/about#mistakes',
        color: 'from-orange-500 to-orange-600',
        hoverColor: 'from-orange-600 to-orange-700'
      },
      {
        id: 'contact',
        title: 'Связаться',
        icon: Phone,
        href: '/contacts',
        color: 'from-red-500 to-red-600',
        hoverColor: 'from-red-600 to-red-700'
      },
      {
        id: 'career',
        title: 'Карьера',
        icon: Briefcase,
        href: '/about#career',
        color: 'from-indigo-500 to-indigo-600',
        hoverColor: 'from-indigo-600 to-indigo-700'
      }
    ]
  }

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {mindMapData.center.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {mindMapData.center.description}
          </p>
        </motion.div>

        {/* Mind Map Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-lg text-center">
                {mindMapData.center.title}
              </span>
            </div>
          </motion.div>

          {/* Branches */}
          <div className="relative h-96 md:h-[500px]">
            {mindMapData.branches.map((branch, index) => {
              const Icon = branch.icon
              const angle = (index * 60) - 90 // Start from top, 60 degrees apart
              const radius = 200
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              
              return (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Connection Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="absolute w-32 h-0.5 bg-gradient-to-r from-gray-300 to-transparent origin-left"
                    style={{
                      transform: `rotate(${-angle}deg)`,
                      left: '-64px',
                      top: '50%'
                    }}
                  />

                  {/* Branch Node */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setHoveredNode(branch.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                    className="relative"
                  >
                    <Link href={branch.href}>
                      <div className={`
                        w-24 h-24 rounded-full flex flex-col items-center justify-center
                        bg-gradient-to-br ${branch.color} shadow-lg
                        hover:shadow-xl transition-all duration-300 cursor-pointer
                        ${hoveredNode === branch.id ? `bg-gradient-to-br ${branch.hoverColor}` : ''}
                      `}>
                        <Icon className="w-6 h-6 text-white mb-1" />
                        <span className="text-white text-xs font-medium text-center leading-tight">
                          {branch.title}
                        </span>
                      </div>
                    </Link>

                    {/* Sub-branches for team */}
                    {branch.subBranches && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 space-y-2">
                        {branch.subBranches.map((subBranch, subIndex) => {
                          const SubIcon = subBranch.icon
                          return (
                            <motion.div
                              key={subBranch.id}
                              initial={{ opacity: 0, y: -10 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + subIndex * 0.1 }}
                            >
                              <Link href={subBranch.href}>
                                <div className={`
                                  w-20 h-20 rounded-full flex flex-col items-center justify-center
                                  bg-gradient-to-br ${subBranch.color} shadow-md
                                  hover:shadow-lg transition-all duration-300 cursor-pointer
                                `}>
                                  <SubIcon className="w-4 h-4 text-white mb-1" />
                                  <span className="text-white text-xs font-medium text-center leading-tight">
                                    {subBranch.title}
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Interactive Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Исследуйте нашу компанию через интерактивную карту. 
            Каждый раздел расскажет вам о разных аспектах Safinat Finance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMindMap
