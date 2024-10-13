// import { auth } from "@clerk/nextjs/server"
// import { createServerActionProcedure, ZSAError } from "zsa"
// import { Role } from "~/lib/consts"
// import userStore from "../db/user-store"

// export const authedActionClient = createServerActionProcedure().handler(
//   async () => {
//     const session = auth()

//     if (!session || !session.userId) {
//       throw new ZSAError("FORBIDDEN", "Session not found!")
//     }

//     const dbUser = await userStore.getByExternalId(session.userId)

//     if (!dbUser) {
//       throw new ZSAError("FORBIDDEN", "User not found.")
//     }

//     // Return the next middleware with `userId` value in the context
//     return { user: dbUser }
//   }
// )

// export const adminActionClient = createServerActionProcedure(
//   authedActionClient
// ).handler(async ({ ctx }) => {
//   if (!ctx.user.role || ctx.user.role < Role.ADMIN) {
//     throw new ZSAError(
//       "FORBIDDEN",
//       "Insufficient permissions. Admin access required."
//     )
//   }
// })
