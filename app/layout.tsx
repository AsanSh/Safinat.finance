import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safinat Finance - Исламское финансирование в Кыргызстане',
  description: 'Надежный партнер в сфере исламского финансирования. Мурабаха, инвестиции, рассрочка для строительных компаний в Кыргызстане.',
  keywords: 'исламское финансирование, мурабаха, Кыргызстан, инвестиции, рассрочка, строительство',
  authors: [{ name: 'Safinat Finance' }],
  openGraph: {
    title: 'Safinat Finance - Исламское финансирование',
    description: 'Надежный партнер в сфере исламского финансирования в Кыргызстане',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://www.safinat.finance',
    siteName: 'Safinat Finance',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.safinat.finance',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CurrencyProvider>
          <AuthProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#22c55e',
                  color: '#fff',
                },
              }}
            />
          </AuthProvider>
        </CurrencyProvider>
      </body>
    </html>
  )
}
