import { os } from '@orpc/server'
import { loginWithGoogle, getUsers } from './login'

export const router = os.router({
  login: {
    loginWithGoogle,
    getUsers,
  },
})
