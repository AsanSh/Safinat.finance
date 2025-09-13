import InvestorHero from '@/components/pages/InvestorHero'
import InvestorProcess from '@/components/pages/InvestorProcess'
import InvestorProducts from '@/components/pages/InvestorProducts'
import InvestorApplication from '@/components/pages/InvestorApplication'

export const metadata = {
  title: 'Инвестиции в исламские финансы - Safinat Finance',
  description: 'Станьте инвестором в исламские финансы. Прозрачные инвестиции с гарантированной доходностью по принципам шариата в Кыргызстане.',
  keywords: 'инвестиции, исламские финансы, мудараба, мушарака, доходность, Кыргызстан',
}

export default function InvestorsPage() {
  return (
    <>
      <InvestorHero />
      <InvestorProcess />
      <InvestorProducts />
      <InvestorApplication />
    </>
  )
}