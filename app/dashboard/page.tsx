import DashboardLayout from '@/components/pages/DashboardLayout'
import DashboardContent from '@/components/pages/DashboardContent'

export const metadata = {
  title: 'Личный кабинет - Safinat Finance',
  description: 'Управляйте своими инвестициями и заявками в личном кабинете Safinat Finance.',
  keywords: 'личный кабинет, инвестиции, заявки, Safinat Finance',
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  )
}
