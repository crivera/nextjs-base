import { db } from '.'

export default {
  async getById(id: string) {
    return db.query.users.findFirst({
      where: (user, { eq }) => eq(user.id, id),
    })
  },
}
