import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Instagram } from '@/app/icons/Instagram'
import { Facebook } from '@/app/icons/Facebook'
import { Twitter } from '@/app/icons/Twitter'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link
            href="/privacy"
            className="text-black dark:text-white/90 font-medium transition-all hover:opacity-75 mr-4 dark:hover:opwhite/90"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-black dark:text-white/90 font-medium transition-all hover:opacity-75 dark:hover:text-gray-200"
          >
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0 transition-all">
          <Link
            href="#"
            className="text-black dark:text-white/90 hover:scale-125 hover:opacity-70 transition-all dark:hover:text-gray-200"
          >
            <span className="sr-only">Facebook</span>
            <Facebook className='size-8'/>
          </Link>
          <Link
            href="#"
            className="text-black dark:text-white/90 hover:scale-125 hover:opacity-70 transition-all dark:hover:text-gray-200"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className='size-8'/>
          </Link>
          <Link
            href="#"
            className="text-black dark:text-white/90 hover:scale-125 hover:opacity-70 transition-all dark:hover:text-gray-200"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className='size-8'/>
          </Link>
        </div>
        <div className="flex items-center">
          {/* <Input type="email" placeholder="Enter your email" className="mr-2" /> */}
          <Button className='hover:scale-105 transition-all'>Subscribe</Button>
        </div>
      </div>
    </footer>
  )
}
