'use client'

import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

const HeroSimple = () => {
  const stats = [
    { icon: Shield, value: '100%', label: 'Соответствие шариату' },
    { icon: TrendingUp, value: '15%+', label: 'Средняя доходность' },
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Исламское финансирование
              <span className="text-gradient block">в Кыргызстане</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Надежный партнер в сфере исламского финансирования. 
              Предоставляем качественные финансовые решения в соответствии 
              с принципами шариата для инвесторов и строительных компаний.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="tel:+996999569669" className="btn-primary inline-flex items-center justify-center group">
                Позвонить: +996 999 569 669
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="mailto:partners@safinat.finance" className="btn-secondary inline-flex items-center justify-center">
                partners@safinat.finance
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="card text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSimple
