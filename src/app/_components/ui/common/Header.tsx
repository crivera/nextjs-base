'use client'

import { Star } from 'lucide-react'
import Link from 'next/link'
import { loginWithGoogle } from '~/server/routes/login'
import { Button } from '../button'

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Star className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-2xl font-bold text-gray-900">Website</span>
      </Link>
      <div className="ml-auto">
        <Button onClick={async () => await loginWithGoogle()}>Log in</Button>
      </div>
    </header>
  )
}
