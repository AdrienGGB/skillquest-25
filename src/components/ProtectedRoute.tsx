import { redirect } from 'next/navigation'
import { getSession } from '@/utils/auth'

export default async function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return <>{children}</>
} 