import { env } from "~/env";

export enum Role {
	ANNONYMOUS = 0,
	USER = 3,
	ADMIN = 5,
	SYSTEM = 10,
}

export const BASE_URL = env.NEXT_PUBLIC_VERCEL_URL
	? `https://${env.NEXT_PUBLIC_VERCEL_URL}`
	: "http://localhost:3000";
