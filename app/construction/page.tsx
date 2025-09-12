import ConstructionHero from '@/components/pages/ConstructionHero'
import ConstructionConditions from '@/components/pages/ConstructionConditions'
import ConstructionProcess from '@/components/pages/ConstructionProcess'
import ConstructionExamples from '@/components/pages/ConstructionExamples'
import ConstructionBenefits from '@/components/pages/ConstructionBenefits'
import ConstructionCTA from '@/components/pages/ConstructionCTA'

export const metadata = {
  title: 'Для строительных компаний - Safinat Finance',
  description: 'Финансирование строительных проектов через исламское финансирование. Выгодные условия рассрочки для застройщиков в Кыргызстане.',
  keywords: 'финансирование строительства, рассрочка, застройщики, исламское финансирование, Кыргызстан',
}

export default function ConstructionPage() {
  return (
    <>
      <ConstructionHero />
      <ConstructionConditions />
      <ConstructionProcess />
      <ConstructionExamples />
      <ConstructionBenefits />
      <ConstructionCTA />
    </>
  )
}
