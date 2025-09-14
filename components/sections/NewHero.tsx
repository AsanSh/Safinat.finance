'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Building2, Shield, Users, Star } from 'lucide-react'

const NewHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-secondary-900 via-primary-600 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 bg-accent-500 bg-opacity-20 rounded-full text-accent-300 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Соответствует принципам Шариата
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Safinat Finance</span>
                <span className="block text-accent-300">исламское финансирование</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-4">
                  и инвестиции
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Надежная платформа для исламского финансирования и инвестиций в Кыргызстане. 
                Получайте доходность по принципам Шариата без риба (ростовщичества).
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/investors">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Стать инвестором
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/business">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  >
                    <Building2 className="w-5 h-5 mr-2" />
                    Получить финансирование
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">500+</div>
                  <div className="text-sm text-white/70">Успешных сделок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">15-25%</div>
                  <div className="text-sm text-white/70">Доходность в год</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">100%</div>
                  <div className="text-sm text-white/70">Соответствие Шариату</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-1">24/7</div>
                  <div className="text-sm text-white/70">Поддержка</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Инвестиционный портфель</h3>
                      <p className="text-white/70 text-sm">Активные инвестиции</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Общая сумма</span>
                      <span className="text-accent-300 font-semibold">2 500 000 сом</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Доходность</span>
                      <span className="text-green-400 font-semibold">+18.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Активных сделок</span>
                      <span className="text-white font-semibold">12</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">Прогноз на месяц</span>
                      <span className="text-accent-300 font-semibold">+2.1%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-accent-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-2xl"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">250+</div>
                      <div className="text-xs text-gray-600">Инвесторов</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-2xl"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                      <div className="text-xs text-gray-600">Рейтинг</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero
