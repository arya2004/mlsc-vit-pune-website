// @ts-ignore
// @ts-nocheck

import axios from 'axios';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

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
      async signIn({ user, account, profile}) {
        const email = user.email;
        const name = user.name;
        if (!email || !name) 
        return false;
        const url = profile.organizations_url // @ts-ignore
        const {data} = await axios.get(url)
        const ORG_NAME = 'mlscvitpune'
        let res = false;
        for (const org of data) {
          if (org.login === ORG_NAME) {
            res = true;
            break;
          }
        }
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

