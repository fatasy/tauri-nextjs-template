import Auth0 from '@auth/core/providers/auth0'
import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const authConfig: NextAuthConfig = {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
    authorized({ request: req }) {
      const token = cookies().get('next-auth.session-token')
      const { pathname } = req.nextUrl
      console.log({ token })

      const isAuthorized = Boolean(token)
      const isAuthRoute = pathname.startsWith('/auth')
      const currentUrl = req.url
      const currentIsAuthRoute = currentUrl.startsWith('/auth')

      if (!isAuthorized && isAuthRoute) return true
      if (isAuthorized && currentIsAuthRoute) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
      }
      return isAuthorized
    },
  },
  pages: {
    signIn: 'auth/signin',
  },
  debug: false,
}

export const { handlers, auth, update } = NextAuth(authConfig)
