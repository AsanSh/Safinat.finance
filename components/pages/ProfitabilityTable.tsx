'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Calculator, PieChart } from 'lucide-react'

const ProfitabilityTable = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const investmentPlans = [
    {
      name: 'Базовый',
      minAmount: '₽1,000,000',
      maxAmount: '₽4,999,999',
      returnRate: '12-14%',
      duration: '12-24 месяца',
      features: [
        'Стандартная поддержка',
        'Ежемесячные отчеты',
        'Базовое страхование',
        'Онлайн-мониторинг'
      ]
    },
    {
      name: 'Премиум',
      minAmount: '₽5,000,000',
      maxAmount: '₽9,999,999',
      returnRate: '14-16%',
      duration: '18-30 месяцев',
      features: [
        'Персональный менеджер',
        'Еженедельные отчеты',
        'Расширенное страхование',
        'Приоритетная поддержка',
        'Дополнительные проекты'
      ]
    },
    {
      name: 'VIP',
      minAmount: '₽10,000,000+',
      maxAmount: 'Без ограничений',
      returnRate: '16-18%',
      duration: '24-36 месяцев',
      features: [
        'VIP менеджер 24/7',
        'Ежедневные отчеты',
        'Максимальное страхование',
        'Эксклюзивные проекты',
        'Индивидуальные условия',
        'Участие в управлении'
      ]
    }
  ]

  const exampleCalculations = [
    {
      amount: '₽1,000,000',
      rate: '13%',
      duration: '24 месяца',
      totalReturn: '₽1,260,000',
      profit: '₽260,000',
      monthlyReturn: '₽10,833'
    },
    {
      amount: '₽5,000,000',
      rate: '15%',
      duration: '30 месяцев',
      totalReturn: '₽6,875,000',
      profit: '₽1,875,000',
      monthlyReturn: '₽62,500'
    },
    {
      amount: '₽10,000,000',
      rate: '17%',
      duration: '36 месяцев',
      totalReturn: '₽15,100,000',
      profit: '₽5,100,000',
      monthlyReturn: '₽141,667'
    }
  ]

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
            Таблицы доходности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные расчеты доходности для разных сумм инвестиций
          </p>
        </motion.div>

        {/* Investment Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {investmentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card relative ${
                plan.name === 'Премиум' 
                  ? 'ring-2 ring-primary-500 scale-105' 
                  : ''
              }`}
            >
              {plan.name === 'Премиум' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {plan.returnRate}
                </div>
                <div className="text-gray-600">
                  {plan.minAmount} - {plan.maxAmount}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Срок: {plan.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                plan.name === 'Премиум'
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                Выбрать план
              </button>
            </div>
          ))}
        </motion.div>

        {/* Example Calculations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Примеры расчетов доходности
            </h3>
            <p className="text-gray-600">
              Реальные примеры доходности для разных сумм инвестиций
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exampleCalculations.map((calc, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Инвестиция</h4>
                  <div className="text-2xl font-bold text-primary-600">{calc.amount}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-semibold">{calc.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-semibold">{calc.duration}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Общий возврат:</span>
                      <span className="font-bold text-green-600">{calc.totalReturn}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Прибыль:</span>
                      <span className="font-bold text-primary-600">{calc.profit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">В месяц:</span>
                      <span className="font-semibold">{calc.monthlyReturn}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gray-100 rounded-lg p-4 inline-block">
              <div className="flex items-center justify-center mb-2">
                <PieChart className="w-5 h-5 text-primary-600 mr-2" />
                <span className="font-semibold text-gray-900">Важно:</span>
              </div>
              <p className="text-sm text-gray-600">
                Доходность может варьироваться в зависимости от конкретного проекта. 
                Все расчеты приведены для примера.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfitabilityTable
