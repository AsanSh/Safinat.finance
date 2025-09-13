import DocumentsHero from '@/components/pages/DocumentsHero'
import DocumentsList from '@/components/pages/DocumentsList'
import FAQ from '@/components/pages/FAQ'

export const metadata = {
  title: 'Документы - Safinat Finance',
  description: 'Документы, лицензии, договоры и часто задаваемые вопросы Safinat Finance. Политика конфиденциальности и условия использования.',
  keywords: 'документы, лицензии, договоры, FAQ, политика конфиденциальности, исламское финансирование',
}

export default function DocumentsPage() {
  return (
    <>
      <DocumentsHero />
      <DocumentsList />
      <FAQ />
    </>
  )
}
