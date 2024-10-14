import NextAuth from "next-auth";

import { db } from "../db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import config from "./config";
import {
	accounts,
	authenticators,
	users,
	verificationTokens,
} from "../db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: DrizzleAdapter(db, {
		accountsTable: accounts,
		usersTable: users,
		authenticatorsTable: authenticators,
		verificationTokensTable: verificationTokens,
	}),
	session: {
		strategy: "jwt",
	},
	...config,
});
