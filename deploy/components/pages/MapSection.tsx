'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const MapSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="map" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Как нас найти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш офис расположен в центре Бишкека
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Карта будет здесь
                </h3>
                <p className="text-gray-600">
                  г. Бишкек, ул. Чуй 123
                </p>
              </div>
            </div>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Информация об офисе
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">
                      г. Бишкек, ул. Чуй 123<br />
                      Кыргызстан, 720000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-600">
                      <a href="tel:+996999569669" className="hover:text-primary-600 transition-colors">
                        +996 999 569 669
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@safinat.finance" className="hover:text-primary-600 transition-colors">
                        info@safinat.finance
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Часы работы</h4>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00-18:00<br />
                      Сб: 10:00-16:00<br />
                      Вс: Выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Как добраться</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• На общественном транспорте: автобусы №1, 2, 3 до остановки "Чуй"</li>
                <li>• На автомобиле: парковка во дворе офиса</li>
                <li>• Пешком: 5 минут от центральной площади</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="/contacts" className="btn-primary">
                Связаться с нами
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
