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

export const SYSTEM_ROBOT = {
		name: 'System Robot',
		id: 'change_me',
		email: 'change_me',
		role: Role.SYSTEM,
		createdAt: new Date(),
		updatedAt: new Date(),
	}
