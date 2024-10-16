import { ChevronLeft, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useSupabase } from '@/hooks/use-supabase'
import { type ProductType } from '@/types/product'
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const { getProductById, getProducts } = await useSupabase()
  const product = await getProductById(id)
  const products = await getProducts()
  const randomsProducts = products?.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts?.slice(0, 4)
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-80 h-w-80 object-center"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <span></span>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button className="flex-grow">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsLimited?.map((product: ProductType) => {
              const { id, image_url, name } = product
              return (
                <Card key={id}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                      <img
                        src={image_url}
                        alt={`Related Product ${image_url}`}
                      />
                    </div>
                    <h3 className="font-semibold">Related Product {name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      $99.99
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
