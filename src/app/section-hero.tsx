import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function SectionHero() {
  return (
    <section className="bg-white dark:bg-black/80 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl text-black font-bold mb-6 dark:text-white/90">
          Welcome to Minimal Elegance
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Discover our curated collection of timeless pieces
        </p>
        <Button className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
          <Link href="/store">Explore Store</Link>
        </Button>
      </div>
    </section>
  )
}
