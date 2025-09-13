import CalculatorHero from '@/components/pages/CalculatorHero'
import ModernCalculator from '@/components/ModernCalculator'
import IslamicProducts from '@/components/IslamicProducts'

export const metadata = {
  title: 'Калькулятор исламского финансирования - Safinat Finance',
  description: 'Рассчитайте условия исламского финансирования онлайн. Калькулятор мурабаха для недвижимости, автомобилей и бизнеса в Кыргызстане.',
  keywords: 'калькулятор исламского финансирования, мурабаха калькулятор, исламские финансы, Кыргызстан',
}

export default function CalculatorPage() {
  return (
    <>
      <CalculatorHero />
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <ModernCalculator />
        </div>
      </div>
      <IslamicProducts />
    </>
  )
}
