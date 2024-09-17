import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function SectionFeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="group">
              <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90">
                <Image
                  width={400}
                  height={400}
                  src="/images/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.png"
                  alt={`Product ${product}`}
                  className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-medium text-dark   dark:text-white">
                Minimal Product {product}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">$99.99</p>
              <Button
                variant="outline"
                className="w-full bg-black text-white hover:opacity-80 dark:bg-white dark:text-black dark:border-gray-500 dark:hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
