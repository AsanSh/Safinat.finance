'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Building2, 
  ShoppingCart, 
  Wrench, 
  Truck, 
  Calculator, 
  CheckCircle 
} from 'lucide-react'
import { useCurrency } from '@/contexts/CurrencyContext'
import { formatCurrency } from '@/utils/currency'

const BusinessProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { currency, exchangeRate } = useCurrency()

  const products = [
    {
      icon: Building2,
      title: 'Финансирование недвижимости',
      description: 'Приобретение офисов, складов, производственных помещений',
      minAmount: 1000000,
      maxAmount: 50000000,
      term: '12-84 месяца',
      rate: '14-18%',
      features: [
        'Коммерческая недвижимость',
        'Производственные помещения',
        'Складские комплексы',
        'Офисные здания'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Оборотные средства',
      description: 'Финансирование товарных запасов и текущих операций',
      minAmount: 300000,
      maxAmount: 20000000,
      term: '6-24 месяца',
      rate: '16-22%',
      features: [
        'Товарные запасы',
        'Сезонные закупки',
        'Расширение ассортимента',
        'Быстрое пополнение'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Оборудование и техника',
      description: 'Приобретение производственного оборудования и техники',
      minAmount: 500000,
      maxAmount: 30000000,
      term: '12-60 месяцев',
      rate: '15-20%',
      features: [
        'Производственное оборудование',
        'Транспортные средства',
        'IT-техника',
        'Специализированная техника'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Truck,
      title: 'Логистика и транспорт',
      description: 'Финансирование транспортных средств для бизнеса',
      minAmount: 400000,
      maxAmount: 15000000,
      term: '12-48 месяцев',
      rate: '16-24%',
      features: [
        'Грузовые автомобили',
        'Специализированный транспорт',
        'Логистические решения',
        'Автопарк для бизнеса'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const formatAmount = (amount: number): string => {
    return formatCurrency(amount, currency, exchangeRate)
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Продукты для бизнеса
            <span className="text-gradient block">Safinat Finance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полный спектр исламских финансовых решений для развития вашего бизнеса
          </p>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Amount Range */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Сумма финансирования:</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary-600">
                        {formatAmount(product.minAmount)}
                      </span>
                      <span className="text-gray-400">—</span>
                      <span className="text-lg font-bold text-primary-600">
                        {formatAmount(product.maxAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Срок</div>
                      <div className="font-semibold text-gray-900">{product.term}</div>
                    </div>
                    <div className="text-center p-3 bg-primary-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Наценка</div>
                      <div className="font-semibold text-gray-900">{product.rate}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Возможности:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary">
                      Подать заявку
                    </button>
                    <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                      <Calculator className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Все продукты соответствуют принципам шариата
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Мы используем только разрешенные исламом финансовые инструменты: мурабаха, иджара, 
              мудараба и другие, обеспечивая полное соответствие религиозным принципам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#application" className="btn-primary">
                Подать заявку на финансирование
              </a>
              <a href="tel:+996999569669" className="btn-secondary">
                Консультация: +996 999 569 669
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessProducts
