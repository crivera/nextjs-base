import NextAuth, { DefaultSession } from 'next-auth'

import { db } from '../db'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import config from './config'
import {
  accounts,
  authenticators,
  users,
  verificationTokens,
} from '../db/schema'
import { Role } from '~/lib/consts'
import userStore from '../db/user-store'


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts,
    usersTable: users,
    authenticatorsTable: authenticators,
    verificationTokensTable: verificationTokens,
  }),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      const dbUser = await userStore.getUserById(token.sub!)
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: dbUser?.role ?? Role.ANNONYMOUS,
        },
      }
    },
  },
  ...config,
})

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: Role
    } & DefaultSession['user']
  }
}
