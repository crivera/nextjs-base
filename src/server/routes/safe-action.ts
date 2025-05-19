import { Role, SYSTEM_ROBOT } from '~/lib/consts'
import { auth } from '../authentication'

import { os } from '@orpc/server'
import { headers } from 'next/headers'
import { env } from '~/env'
import userStore from '../db/user-store'

const base = os.errors({
  UNAUTHORIZED: {},
  FORBIDDEN: {},
})

export const authedActionClient = base.middleware(
  async ({ context, next, errors }) => {
    const session = await auth()
    if (!session || !session.user?.id) {
      throw errors.UNAUTHORIZED({
        message: 'Session not found!',
      })
    }

    const dbUser = await userStore.getUserById(session.user.id)

    if (!dbUser) {
      throw errors.FORBIDDEN({
        message: 'User not found.',
      })
    }

    const result = await next({
      context: {
        user: dbUser,
      },
    })

    return result
  },
)

export const adminActionClient = base
  .use(authedActionClient)
  .use(async ({ context, next, errors }) => {
    if (context.user.role < Role.ADMIN) {
      throw errors.FORBIDDEN({
        message: 'Insufficient permissions. Admin access required.',
      })
    }

    return next({
      context: {
        user: context.user,
      },
    })
  })

export const systemActionClient = base.use(
  async ({ context, next, errors }) => {
    const allHeaders = await headers()
    const authHeader =
      allHeaders.get('Authorization') || allHeaders.get('authorization')

    if (!authHeader) {
      throw errors.FORBIDDEN({
        message: 'Auth header required.',
      })
    }

    const parts = authHeader.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const token = parts[1]
      if (token === env.SYSTEM_KEY) {
        return next({
          context: {
            user: SYSTEM_ROBOT,
          },
        })
      }
    }

    throw errors.FORBIDDEN({
      message: 'Bad key.',
    })
  },
)
