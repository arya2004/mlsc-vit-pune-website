'use client'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button style={{color: 'white'}} onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <button style={{color: 'white'}} onClick={() => signOut()}>Sign Out</button>
}