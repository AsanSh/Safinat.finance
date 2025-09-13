import Cur8StyleHero from '@/components/sections/Cur8StyleHero'
import InvestmentProducts from '@/components/sections/InvestmentProducts'
import KeyFeatures from '@/components/sections/KeyFeatures'
import ModernCalculator from '@/components/ModernCalculator'
import StatsSection from '@/components/sections/StatsSection'
import ClientTestimonials from '@/components/sections/ClientTestimonials'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Cur8StyleHero />
      <InvestmentProducts />
      <KeyFeatures />
      <ModernCalculator />
      <StatsSection />
      <ClientTestimonials />
      <CTA />
    </>
  )
}
