import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
	// adapter: DrizzleAdapter(db),
	session: {
		strategy: "jwt",
	},
	providers: [Google],
	callbacks: {
		signIn({ user, account, profile, email, credentials }) {
			return true;
		},
	},
});
