import ContactsHero from '@/components/pages/ContactsHero'
import ContactInfo from '@/components/pages/ContactInfo'
import ContactForm from '@/components/pages/ContactForm'
import MapSection from '@/components/pages/MapSection'

export const metadata = {
  title: 'Контакты - Safinat Finance',
  description: 'Свяжитесь с нами для получения консультации по исламскому финансированию. Телефон, email, адрес офиса в Бишкеке.',
  keywords: 'контакты, телефон, email, адрес, Бишкек, консультация, исламское финансирование',
}

export default function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </>
  )
}
