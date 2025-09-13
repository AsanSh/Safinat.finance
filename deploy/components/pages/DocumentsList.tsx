'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Shield, Award, Users, Scale } from 'lucide-react'

const DocumentsList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const documentCategories = [
    {
      icon: FileText,
      title: 'Договоры и формы',
      color: 'from-blue-500 to-blue-600',
      documents: [
        { name: 'Договор мурабаха (типовой)', size: '2.1 MB', type: 'PDF' },
        { name: 'Заявка на инвестирование', size: '1.5 MB', type: 'PDF' },
        { name: 'Заявка на финансирование', size: '1.8 MB', type: 'PDF' },
        { name: 'Анкета клиента', size: '1.2 MB', type: 'PDF' }
      ]
    },
    {
      icon: Shield,
      title: 'Лицензии и разрешения',
      color: 'from-green-500 to-green-600',
      documents: [
        { name: 'Лицензия НБКР', size: '3.2 MB', type: 'PDF' },
        { name: 'Сертификат шариата', size: '2.8 MB', type: 'PDF' },
        { name: 'Разрешение на деятельность', size: '2.5 MB', type: 'PDF' }
      ]
    },
    {
      icon: Award,
      title: 'Сертификаты качества',
      color: 'from-purple-500 to-purple-600',
      documents: [
        { name: 'ISO 9001:2015', size: '4.1 MB', type: 'PDF' },
        { name: 'Международная сертификация', size: '3.8 MB', type: 'PDF' },
        { name: 'Сертификат соответствия', size: '2.9 MB', type: 'PDF' }
      ]
    },
    {
      icon: Users,
      title: 'Политики и процедуры',
      color: 'from-orange-500 to-orange-600',
      documents: [
        { name: 'Политика конфиденциальности', size: '1.8 MB', type: 'PDF' },
        { name: 'Условия использования', size: '2.2 MB', type: 'PDF' },
        { name: 'Политика управления рисками', size: '3.1 MB', type: 'PDF' }
      ]
    },
    {
      icon: Scale,
      title: 'Правовые документы',
      color: 'from-teal-500 to-teal-600',
      documents: [
        { name: 'Устав компании', size: '2.7 MB', type: 'PDF' },
        { name: 'Лицензионное соглашение', size: '2.3 MB', type: 'PDF' },
        { name: 'Договор оферты', size: '1.9 MB', type: 'PDF' }
      ]
    }
  ]

  return (
    <section id="documents" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Документы для скачивания
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все необходимые документы организованы по категориям для удобства
          </p>
        </motion.div>

        <div className="space-y-12">
          {documentCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.documents.map((doc, docIndex) => (
                    <div
                      key={doc.name}
                      className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-primary-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900">
                            {doc.type}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {doc.size}
                        </span>
                      </div>
                      
                      <h4 className="font-medium text-gray-900 mb-3 text-sm">
                        {doc.name}
                      </h4>
                      
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Download All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Скачать все документы
            </h3>
            <p className="text-gray-600 mb-6">
              Получите полный пакет документов одним архивом
            </p>
            <button className="btn-primary">
              <Download className="w-5 h-5 mr-2" />
              Скачать архив (45.2 MB)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DocumentsList
