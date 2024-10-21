import Link from 'next/link'
import { Button } from '../ui/button'
import { Search, User } from '@/components/icons/icons'
import { ModeToggle } from '../dark-mode/mode-toggle'
import AsideCart from '@/components/cart/aside-cart'

export function Header() {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-semibold text-black/80 dark:text-gray-200"
      >
        MinimalStore
      </Link>
      <nav className="hidden md:flex space-x-6 ">
        <Link
          href="/"
          className="text-black/80 font-bold hover:text-black/60 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/store"
          className="text-black/80 font-bold hover:text-black/60 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          Store
        </Link>
        <Link
          href="/deals"
          className="text-black/80 font-bold hover:text-black/60 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          Deals
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-800 dark:text-white"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        {/* <Link href="/cart">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-800 dark:text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </Link> */}
        <AsideCart />
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-800 dark:text-white"
        >
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </div>
  )
}
