import usersShema from '@/models/usersShema'
import connect from '../../../../db'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                await connect().catch(err => { throw new Error(err) })
                const user = await usersShema.findOne({
                    email: credentials?.email
                }).select("+password")
                console.log("user",{
                    ...user.toObject(),
                    role: user.role
                })
                if (!user) {
                    throw new Error("Invalid credentials")
                }
                const isPasswordCorrect = await compare(credentials!.password, user.password)
                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }
                return {
                    ...user.toObject(),
                    role: user.role // Include the role property in the returned object
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 24 * 60 * 60
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as any
            session.user = user
            return session
        },
        redirect: async ({ url, baseUrl }) => {
            return baseUrl + "/login" // Redirect to the login page
        }
    }
}

export default NextAuth(options);