import { db } from '.'

const userStore = {
  async getUserById(id: string) {
    return db.query.users.findFirst({
      where: (user, { eq }) => eq(user.id, id),
    })
  },
}

export default userStore
