'use client'

import { signIn } from 'next-auth/react'
export default function SingInPage() {
  return (
    <div>
      <button onClick={() => void signIn('auth0')}>Sign in</button>
    </div>
  )
}
