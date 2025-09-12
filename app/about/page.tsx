import AboutHero from '@/components/pages/AboutHero'
import MissionVision from '@/components/pages/MissionVision'
import CompanyHistory from '@/components/pages/CompanyHistory'
import TeamSection from '@/components/pages/TeamSection'
import ValuesSection from '@/components/pages/ValuesSection'
import Certifications from '@/components/pages/Certifications'

export const metadata = {
  title: 'О нас - Safinat Finance',
  description: 'Узнайте больше о компании Safinat Finance - ведущем провайдере исламского финансирования в Кыргызстане. Наша миссия, ценности и команда.',
  keywords: 'о компании, миссия, команда, исламское финансирование, Кыргызстан, история',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CompanyHistory />
      <ValuesSection />
      <TeamSection />
      <Certifications />
    </>
  )
}
