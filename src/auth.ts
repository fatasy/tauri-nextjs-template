/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import Auth0 from '@auth/core/providers/auth0'
import { cookies } from 'next/headers'
import type { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth'

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Auth0({
      id: 'auth0',
      name: 'OAuth 2.0',
      issuer: process.env.NEXT_PUBLIC_API_URL,
      authorization: {
        url: 'http://localhost:8080/api/oauth2/authorize',
        params: {
          response_type: 'code',
          client_id: 'client-id-front',
          state: 'teste',
          scope: 'openid',
          redirect_uri: 'http://localhost:3000/api/auth/callback/auth0',
        },
      },
      token: {
        url: 'http://localhost:8080/api/oauth2/token?pos_id=1',
      },
      userinfo: 'http://localhost:8080/api/oauth2/introspect',
      // @ts-ignore
      checks: ['state'],
      clientId: 'client-id-front',
      clientSecret: '123456',
      jwks_endpoint: 'http://localhost:8080/api/oauth2/jwks',
      profile(profile) {
        return { id: profile.user_id, ...profile }
      },
    }) as never,
  ],
  callbacks: {
    jwt({ token, user, profile }) {
      return { ...token, ...user, ...profile } as never
    },
    session({ session, token, user }) {
      return { ...session, user: { ...token, ...user } } as never
    },
    // @ts-expect-error
    authorized({ request: req }) {
      const token = cookies().get('next-auth.session-token')
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const { pathname } = req.nextUrl as Location
      const isAuthorized = Boolean(token)

      if (pathname.startsWith('/auth')) return true
      return isAuthorized
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  debug: false,
}

export const { handlers, auth, update } = NextAuth(authConfig)
