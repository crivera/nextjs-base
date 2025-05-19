'use server'

import { os } from '@orpc/server'
import { signIn } from '../authentication'
import { z } from 'zod'

export const loginWithGoogle = os
  .handler(async () => {
    console.log('loginWithGoogle')
    await signIn('google')
  })
  .actionable()

export const getUsers = os
  .input(
    z.object({
      name: z.string().min(6),
    }),
  )
  .output(z.array(z.string()))
  .handler(async () => {
    console.log('getUsers')
    return ['John Doe', 'Jane Doe']
  })
  .actionable()
