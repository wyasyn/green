import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { username: credentials?.username },
                });

                if (!existingUser) {
                    return null;
                }

                const passwordMatch = await compare(
                    credentials.password,
                    existingUser.password
                );

                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: existingUser.id,
                    username: existingUser.username,
                    firstname: existingUser.firstname,
                    email: existingUser.email,
                };
            },
        }),
    ],
    callbacks: {
        // authorized({ session, request }) {
        //     const isLoggedIn = session?.user;
        //     const isOnDashborad = request.nextUrl.pathname.startsWith("/admin");
        //     if (isOnDashborad) {
        //         if (isLoggedIn) return true;
        //         return false;
        //     } else if (isLoggedIn) {
        //         return Response.redirect(new URL("/admin", request.nextUrl));
        //     }
        //     return true;
        // },
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    username: user.username,
                    firstname: user.firstname,
                };
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                    firstname: token.firstname,
                },
            };
        },
    },
};
