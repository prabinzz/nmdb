import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
	providers: [
		CredentialsProvider({
			secret: process.env.AUTH_SECRET,
			credentials: {
				email: { label: "email" },
				passwrod: { label: "password", type: "password" },
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
};
export default NextAuth(authOptions);
