'use server'

import { createServerAction } from 'zsa'
import { signIn } from '../authentication'

export const loginWithGoogle = createServerAction().handler(async () => {
  await signIn('google')
})
