import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Для инвесторов', href: '/investors' },
      { name: 'Для бизнеса', href: '/business' },
      { name: 'Калькулятор', href: '/calculator' },
      { name: 'Мурабаха', href: '/documents' },
    ],
    company: [
      { name: 'О нас', href: '/about' },
      { name: 'Команда', href: '/about#team' },
        { name: 'Шариатский совет', href: '/sharia-compliance' },
      { name: 'Документы', href: '/documents' },
      { name: 'FAQ', href: '/documents#faq' },
    ],
    support: [
      { name: 'Контакты', href: '/contacts' },
      { name: 'Получить консультацию', href: '/contacts' },
      { name: 'Политика конфиденциальности', href: '/documents' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo 
              size="md" 
              showText={true}
              className="mb-4 sm:mb-6"
            />
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Надежный партнер в сфере исламского финансирования. 
              Предоставляем качественные финансовые решения в соответствии 
              с принципами шариата.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Услуги</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Компания</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Контакты</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">
                    г. Бишкек<br />
                    Кыргызстан
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+996999569669"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +996 999 569 669
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:partners@safinat.finance"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  partners@safinat.finance
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Safinat Finance. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/documents"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/documents"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
