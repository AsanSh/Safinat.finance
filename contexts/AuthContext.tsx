'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  fullName: string
  phone: string
  role: 'investor' | 'business' | 'admin'
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: {
    email: string
    password: string
    fullName: string
    phone: string
    role: 'investor' | 'business'
  }) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Проверяем, есть ли сохраненные данные пользователя
    const savedUser = localStorage.getItem('safinat_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('safinat_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // В реальном приложении здесь будет запрос к API
      // Пока используем моковые данные
      const mockUser: User = {
        id: '1',
        email,
        fullName: 'Тестовый Пользователь',
        phone: '+996 999 569 669',
        role: 'investor',
        createdAt: new Date().toISOString()
      }
      
      setUser(mockUser)
      localStorage.setItem('safinat_user', JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: {
    email: string
    password: string
    fullName: string
    phone: string
    role: 'investor' | 'business'
  }): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // В реальном приложении здесь будет запрос к API
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        fullName: userData.fullName,
        phone: userData.phone,
        role: userData.role,
        createdAt: new Date().toISOString()
      }
      
      setUser(newUser)
      localStorage.setItem('safinat_user', JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('safinat_user')
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
