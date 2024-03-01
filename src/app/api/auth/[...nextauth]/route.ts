// @ts-ignore
// @ts-nocheck

import axios from 'axios';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { parseToGetGithub } from '../../../../helpers/authParser';

export const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt'
    },
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),
    ],
    callbacks: {
      async signIn({ profile }) {
        const loginName = profile.login // @ts-ignore
        const { data } = await axios.get('https://raw.githubusercontent.com/mlscvitpune/Team_23-24/main/README.md')
        const memberData = parseToGetGithub(data)
        const res = memberData.includes(loginName.toLocaleLowerCase())
        return res;
      }, 
      session: ({ session, token }) => {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            randomKey: token.randomKey
          }
        }
      },
      jwt: ({ token, user }) => {
        if (user) {
          const u = user as unknown as any
          return {
            ...token,
            id: u.id,
            randomKey: u.randomKey
          }
        }
        return token
      }
    },
  }
  
  const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST };