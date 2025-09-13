'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'Общие вопросы',
      questions: [
        {
          question: 'Что такое исламское финансирование?',
          answer: 'Исламское финансирование — это система финансовых услуг, основанная на принципах шариата. Она запрещает ростовщичество (риба) и спекуляцию (гарар), вместо этого используя принципы разделения прибыли и убытков, а также реальных активов.'
        },
        {
          question: 'Чем Safinat Finance отличается от обычных банков?',
          answer: 'Мы работаем исключительно по принципам исламского финансирования, не используем процентные ставки, а вместо этого применяем договоры мурабаха, где прибыль формируется от реальной торговой деятельности.'
        },
        {
          question: 'Гарантирована ли безопасность моих инвестиций?',
          answer: 'Да, мы обеспечиваем многоуровневую защиту инвестиций через залоговое обеспечение, страхование рисков и строгий контроль застройщиков. Все проекты проходят тщательную проверку.'
        }
      ]
    },
    {
      title: 'Для инвесторов',
      questions: [
        {
          question: 'Какая минимальная сумма для инвестирования?',
          answer: 'Минимальная сумма инвестирования составляет 1,000,000 сомов. Мы предлагаем различные пакеты: базовый (1-5 млн), премиум (5-10 млн) и VIP (10+ млн сомов).'
        },
        {
          question: 'Как рассчитывается доходность?',
          answer: 'Доходность рассчитывается на основе реальной прибыли от проекта. Мы не используем фиксированные проценты, а распределяем прибыль согласно договору мурабаха.'
        },
        {
          question: 'Как часто выплачивается прибыль?',
          answer: 'Прибыль выплачивается ежемесячно после завершения каждого этапа проекта. Вы получаете регулярные отчеты о состоянии ваших инвестиций.'
        },
        {
          question: 'Могу ли я досрочно выйти из проекта?',
          answer: 'Да, возможен досрочный выход из проекта с пересчетом прибыли согласно условиям договора. Детали обсуждаются индивидуально.'
        }
      ]
    },
    {
      title: 'Для застройщиков',
      questions: [
        {
          question: 'Какие документы нужны для получения финансирования?',
          answer: 'Необходимы: лицензия на строительную деятельность, документы на земельный участок, проектная документация, разрешения на строительство, финансовая отчетность за последние 2 года.'
        },
        {
          question: 'Какой максимальный срок финансирования?',
          answer: 'Максимальный срок финансирования составляет 60 месяцев. Конкретные сроки зависят от типа и масштаба проекта.'
        },
        {
          question: 'Какие типы проектов вы финансируете?',
          answer: 'Мы финансируем жилую, коммерческую и офисную недвижимость, а также инфраструктурные проекты. Все проекты должны соответствовать принципам шариата.'
        },
        {
          question: 'Как происходит контроль использования средств?',
          answer: 'Мы осуществляем постоянный мониторинг проекта, включая финансовый контроль застройщика, проверку документов и контроль хода строительства.'
        }
      ]
    },
    {
      title: 'Технические вопросы',
      questions: [
        {
          question: 'Как подать заявку онлайн?',
          answer: 'Заполните форму на нашем сайте, загрузите необходимые документы. Наши специалисты свяжутся с вами в течение 24 часов для уточнения деталей.'
        },
        {
          question: 'Сколько времени занимает рассмотрение заявки?',
          answer: 'Рассмотрение заявки занимает 3-5 рабочих дней. Для срочных проектов возможно ускоренное рассмотрение в течение 1-2 дней.'
        },
        {
          question: 'Как связаться с персональным менеджером?',
          answer: 'После одобрения заявки вам назначается персональный менеджер, который предоставляет свои контактные данные для связи 24/7.'
        }
      ]
    }
  ]

  return (
    <section id="faq" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <HelpCircle className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 10 + itemIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium text-gray-900">
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами, и мы с радостью ответим на все ваши вопросы
            </p>
            <a href="/contacts" className="btn-primary">
              Связаться с нами
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
