import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AuthButtonServer } from '@/components/auth-button-server'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login Page
            </CardTitle>
            {/* <CardDescription className="text-center">
              {isLoggedIn ? 'You are logged in.' : 'Please log in to continue.'}
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-4">
            <AuthButtonServer />
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-600 dark:text-gray-400">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
