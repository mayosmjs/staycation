import bcrypt from "bcrypt"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaClient } from '@prisma/client'
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import prisma from './prismadb'


// const prisma = new PrismaClient()

export const authOptions = {
  
  adapter: PrismaAdapter(prisma), 
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }
         
        return user;
      }
    })
  ],
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     const response = await axios.post(
  //       process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/userExists",
  //       { email: profile?.email }
  //     );
  //     if (response && response.data?.value === true) {
  //       return true;
  //     } else {
  //       const data = {
  //         firstName: profile.given_name,
  //         lastName: profile.family_name,
  //         email: profile.email,
  //         profileUrl: profile.picture,
  //       };
  //       const response = await axios.post(
  //         process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/signup",
  //         data
  //       );
  //       return true;
  //     }
  //   }
  // },
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
