'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ShariaFAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'В чем разница между мурабаха и традиционным кредитом?',
      answer: 'Основное различие заключается в структуре сделки. В мурабаха мы покупаем актив и продаем его вам с согласованной наценкой, которая известна заранее. В традиционном кредите банк дает деньги под проценты. Мурабаха основана на торговле активами, а не на денежных займах, что делает ее полностью соответствующей шариату.'
    },
    {
      question: 'Как рассчитывается наценка в договоре мурабаха?',
      answer: 'Наценка в договоре мурабаха рассчитывается на основе стоимости актива и согласованного периода финансирования. Мы покупаем недвижимость или оборудование, а затем продаем вам с прозрачной наценкой. Вы видите точно, сколько составляет наша прибыль, сколько идет на актив, страхование и гарантии. С каждым платежом вы накапливаете долю в активе.'
    },
    {
      question: 'Что происходит, если клиент хочет досрочно выкупить актив?',
      answer: 'С самого начала мы обеспечиваем прозрачность. Клиенты получают график платежей с указанием не только платежей, но и цены выкупа актива в любое время в течение договора. Если клиент решает выкупить актив досрочно, он платит только оставшуюся стоимость актива без дополнительных комиссий или штрафов.'
    },
    {
      question: 'Как происходит передача права собственности в конце срока?',
      answer: 'В конце срока аренды, если нет нарушений договора, клиент имеет право приобрести актив без дополнительных платежей. К концу договора клиент уже полностью оплатил актив. Нет финального или баллонного платежа. Первоначальный взнос, внесенный клиентом в начале договора, засчитывается как цена продажи в конце срока.'
    },
    {
      question: 'Какие риски связаны с исламским финансированием?',
      answer: 'В мурабаха исламский финансовый провайдер сохраняет риски, связанные с владением, в то время как клиент несет ответственность, связанную с использованием актива. Например, если что-то происходит с активом до того, как клиент его получил, и по какой-то причине он не был застрахован, клиент не несет ответственности перед финансовым провайдером.'
    },
    {
      question: 'Сколько я переплачу по сравнению с обычным кредитом?',
      answer: 'Общая переплата зависит от нескольких факторов - кредитного рейтинга, уровня дохода и истории. Например, если стоимость актива составляет 2,000,000 сомов, а ваш первоначальный взнос составляет 5% от этой суммы - 100,000 сомов. Мы финансируем 1,900,000 сомов. За 3-летний срок переплата составит от 380,000 до 720,000 сомов. После 3 лет, если не было нарушений договора, актив становится вашим без дополнительных платежей.'
    },
    {
      question: 'Как эта переплата является прибылью от аренды, а не процентами?',
      answer: 'Этот вопрос задавался и в прошлом, даже во времена нашего Пророка (САВ). Как видно в суре Аль-Бакара, аят 275 - "Это потому, что они говорят: "Торговля ничем не отличается от процентов". Но Аллах (СВТ) разрешил торговлю и запретил проценты". Проценты - это дать деньги и потребовать больше денег взамен. В исламе деньги не имеют внутренней ценности, поэтому запрещено давать деньги и просить больше взамен. Мы не используем проценты ни на одном из наших этапов. От начала до конца наши процессы основаны на реальной торговле.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            Вопросы и ответы
            <span className="text-gradient block">о шариатском соответствии</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые частые вопросы о принципах исламского финансирования и нашей модели мурабаха
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-6 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Готовы начать с исламским финансированием?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами для получения персональной консультации по шариатскому финансированию 
              и узнайте, как начать получать стабильную прибыль в соответствии с принципами ислама.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+996999569669" className="btn-primary">
                Позвонить: +996 999 569 669
              </a>
              <a href="mailto:partners@safinat.finance" className="btn-secondary">
                partners@safinat.finance
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShariaFAQ
