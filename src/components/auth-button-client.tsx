'use client'
import { Button } from './ui/button'
import { GithubIcon, LogOut } from './icons/icons'
import { createClient } from '@/utils/supabase/client'
import { type Session } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClient()
  const router = useRouter()
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: 'http://localhost:3000/auth/callback' }
    })
  }
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <header className="space-y-4">
      {session === null
        ? (
        <Button className="w-full" variant="outline" onClick={handleSignIn}>
          <GithubIcon className="mr-2 h-4 w-4" />
          Log in with GitHub
        </Button>
          )
        : (
        <Button className="w-full" variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
          )}
    </header>
  )
}
