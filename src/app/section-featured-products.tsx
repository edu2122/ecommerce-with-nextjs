import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image_url: string
  stock: number
}

export function SectionFeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const { id, name, price, image_url: imageUrl } = product
            return (
              <div key={id} className="group">
                <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90">
                  <img
                    width={400}
                    height={400}
                    src={imageUrl}
                    alt={`Product ${name}`}
                    className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-medium text-dark   dark:text-white">
                  {`Minimal Product ${name}`}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                  ${price}
                </p>
                <Button
                  variant="outline"
                  className="mt-2 w-full dark:text-white"
                >
                  Add to Cart
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
