import { db } from '.'

const userStore = {
  async getById(id: string) {
    return db.query.users.findFirst({
      where: (user, { eq }) => eq(user.id, id),
    })
  },
}

export default userStore
