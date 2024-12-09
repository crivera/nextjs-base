import { createServerActionProcedure, ZSAError } from 'zsa'
import { Role, SYSTEM_ROBOT } from '~/lib/consts'
import { auth } from '../authentication'

import { env } from '~/env'
import userStore from '../db/user-store'

export const authedActionClient = createServerActionProcedure().handler(
  async () => {
    const session = await auth()
    if (!session || !session.user?.id) {
      throw new ZSAError('FORBIDDEN', 'Session not found!')
    }

    const dbUser = await userStore.getUserById(session.user.id)

    if (!dbUser) {
      throw new ZSAError('FORBIDDEN', 'User not found.')
    }

    // Return the next middleware with `userId` value in the context
    return { user: dbUser }
  },
)

export const adminActionClient = createServerActionProcedure(
  authedActionClient,
).handler(async ({ ctx }) => {
  if (ctx.user.role < Role.ADMIN) {
    throw new ZSAError(
      'FORBIDDEN',
      'Insufficient permissions. Admin access required.',
    )
  }
})

export const systemActionClient = createServerActionProcedure().handler(
  async ({ request }) => {
    const authHeader =
      request?.headers?.get('Authorization') ||
      request?.headers?.get('authorization')
    if (!authHeader) {
      throw new ZSAError('FORBIDDEN', 'Auth header required.')
    }

    const parts = authHeader.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const token = parts[1]
      if (token === env.SYSTEM_KEY) {
        return {
          user: SYSTEM_ROBOT,
        }
      }
    }

    throw new ZSAError('FORBIDDEN', 'Bad Header.')
  },
)
