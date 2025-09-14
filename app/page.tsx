import NewHero from '@/components/sections/NewHero'
import ThreeSteps from '@/components/sections/ThreeSteps'
import NewAdvantages from '@/components/sections/NewAdvantages'
import CasesSection from '@/components/sections/CasesSection'
import ApplicationForm from '@/components/sections/ApplicationForm'

export default function HomePage() {
  return (
    <>
      <NewHero />
      <ThreeSteps />
      <NewAdvantages />
      <CasesSection />
      <ApplicationForm />
    </>
  )
}
