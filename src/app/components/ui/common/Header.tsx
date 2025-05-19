'use client'

import { isDefinedError, onError } from '@orpc/client'
import { useServerAction } from '@orpc/react/hooks'
import { Star } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../button'
import { loginWithGoogle } from '~/server/routes/login'

export function Header() {
  const { execute, data, error, status } = useServerAction(loginWithGoogle, {
    interceptors: [
      onError((error) => {
        if (isDefinedError(error)) {
          //console.error(error.data)
          //                   ^ Typed error data
        }
      }),
    ],
  })

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Star className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-2xl font-bold text-gray-900">Website</span>
      </Link>
      <div className="ml-auto">
        <Button onClick={() => execute({ name: 'John Doe' })}>Log in</Button>
      </div>
    </header>
  )
}
