'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CurrencySwitcher from './CurrencySwitcher'
import AuthModal from './AuthModal'
import Logo from './Logo'
import { useAuth } from '@/contexts/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Главная', href: '/' },
    { 
      name: 'Услуги', 
      href: '#',
      dropdown: [
        { name: 'Для инвесторов', href: '/investors' },
        { name: 'Для бизнеса', href: '/business' },
        { name: 'Калькулятор', href: '/calculator' },
      ]
    },
    { name: 'Шариатский совет', href: '/sharia-compliance' },
    { name: 'О нас', href: '/about' },
    { name: 'Документы', href: '/documents' },
    { name: 'Контакты', href: '/contacts' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo 
            size="md" 
            showText={true}
            className="hover:opacity-80 transition-opacity"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-600 font-semibold'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Currency Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <div className="hidden xl:block">
              <CurrencySwitcher />
            </div>
            {isAuthenticated ? (
              <div className="hidden lg:flex items-center space-x-2">
                <span className="text-sm text-gray-600">Привет, {user?.fullName}</span>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium whitespace-nowrap">
                  Личный кабинет
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium whitespace-nowrap flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Выйти</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login')
                  setIsAuthModalOpen(true)
                }}
                className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-medium hidden lg:block whitespace-nowrap flex items-center space-x-1"
              >
                <User className="w-4 h-4" />
                <span>Войти</span>
              </button>
            )}
            <Link href="/contacts" className="btn-primary text-sm px-2 py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-2 whitespace-nowrap">
              <span className="hidden lg:inline">Получить консультацию</span>
              <span className="lg:hidden">Консультация</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {/* Mobile Currency Switcher */}
                <div className="px-4 pb-4 border-b border-gray-200">
                  <CurrencySwitcher />
                </div>
                
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-4 py-2 text-gray-700 font-medium">
                          {item.name}
                        </div>
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-primary-600 font-semibold bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
                  {isAuthenticated ? (
                    <>
                      <div className="text-center py-2">
                        <span className="text-sm text-gray-600">Привет, {user?.fullName}</span>
                      </div>
                      <Link 
                        href="/dashboard" 
                        className="block w-full text-center py-2 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Личный кабинет
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-center py-2 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                      >
                        Выйти
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setAuthMode('login')
                        setIsAuthModalOpen(true)
                        setIsMenuOpen(false)
                      }}
                      className="block w-full text-center py-2 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                    >
                      Войти
                    </button>
                  )}
                  <Link 
                    href="/contacts" 
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Получить консультацию
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  )
}

export default Header
