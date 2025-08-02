import { createLazyFileRoute } from '@tanstack/react-router'
import SignIn1 from '@/features/auth/sign-in/sign-in-1'

export const Route = createLazyFileRoute('/(auth)/sign-in-1')({
  component: SignIn1,
})
