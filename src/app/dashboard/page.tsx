'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

interface User {
  id: string;
  email?: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase.auth])

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Please sign in to view your profile</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Your Profile
          </h2>
        </div>
        <div className="rounded-md bg-white p-6 shadow">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">User ID</label>
              <div className="mt-1 break-all rounded-md bg-gray-50 p-2 text-sm">
                {user.id}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 rounded-md bg-gray-50 p-2 text-sm">
                {user.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
