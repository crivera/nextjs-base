import NextAuth from "next-auth";
import authConfig from "./server/authentication/config";

export const { auth: middleware } = NextAuth(authConfig);
