import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	// pages: {
	// 	signIn: "/auth/sign_in",
	// },
	callbacks: {
		async session({ session, user }) {
			return Promise.resolve({
				...session,
				user: {
					...session.user,
					id: user.id,
				},
			});
		},
	},
	secret: process.env.AUTH_SECRET,
});
