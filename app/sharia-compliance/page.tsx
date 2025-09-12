import ShariaHero from '@/components/pages/ShariaHero'
import ShariaPrinciples from '@/components/pages/ShariaPrinciples'
import ShariaModel from '@/components/pages/ShariaModel'
import ShariaCertification from '@/components/pages/ShariaCertification'
import ShariaFAQ from '@/components/pages/ShariaFAQ'

export const metadata = {
  title: 'Шариатский совет - Safinat Finance',
  description: 'Шариатский совет Safinat Finance обеспечивает 100% соответствие принципам шариата в исламском финансировании. Прозрачность, справедливость, этичность в каждой сделке.',
  keywords: 'шариатский совет, исламское финансирование, халяль финансы, мурабаха, иджара, принципы шариата',
}

export default function ShariaCompliancePage() {
  return (
    <>
      <ShariaHero />
      <ShariaPrinciples />
      <ShariaModel />
      <ShariaCertification />
      <ShariaFAQ />
    </>
  )
}
