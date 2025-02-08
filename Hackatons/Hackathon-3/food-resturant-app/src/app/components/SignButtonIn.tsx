'use client'
import { SignInButton } from '@clerk/nextjs'
import { GoPerson } from "react-icons/go";

export default function SignButtonIn() {
  return (
    <SignInButton>
      <button><GoPerson /></button>
    </SignInButton>
  )
}