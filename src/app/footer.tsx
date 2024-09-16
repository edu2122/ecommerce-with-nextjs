import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Instagram } from '@/app/icons/Instagram'
import { Facebook } from '@/app/icons/Facebook'
import { Twitter } from '@/app/icons/Twitter'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link
            href="/privacy"
            className="text-gray-600 hover:text-gray-800 mr-4 dark:hover:text-gray-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
          >
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <span className="sr-only">Facebook</span>
            <Facebook />
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <span className="sr-only">Instagram</span>
            <Instagram />
          </Link>
          <Link
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </Link>
        </div>
        <div className="flex items-center">
          {/* <Input type="email" placeholder="Enter your email" className="mr-2" /> */}
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  )
}
