import BusinessHero from '@/components/pages/BusinessHero'
import BusinessProcess from '@/components/pages/BusinessProcess'
import BusinessProducts from '@/components/pages/BusinessProducts'
import BusinessApplication from '@/components/pages/BusinessApplication'

export const metadata = {
  title: 'Исламское финансирование для бизнеса - Safinat Finance',
  description: 'Финансирование бизнеса по принципам шариата. Мурабаха, иджара и другие исламские финансовые инструменты для развития вашего бизнеса в Кыргызстане.',
  keywords: 'финансирование бизнеса, исламские финансы, мурабаха, иджара, бизнес кредит, Кыргызстан',
}

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessProcess />
      <BusinessProducts />
      <BusinessApplication />
    </>
  )
}
