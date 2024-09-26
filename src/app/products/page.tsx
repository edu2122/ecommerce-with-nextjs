import Image from 'next/image'
import { ChevronLeft, Moon, Sun, ShoppingCart, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createClient } from '@/utils/supabase/client'

// This would typically come from an API or database
const product = {
  id: 1,
  name: 'Minimal Chair',
  price: 199.99,
  description:
    'A sleek and comfortable chair perfect for any modern home or office. Crafted with high-quality materials for durability and style.',
  features: [
    'Ergonomic design for optimal comfort',
    'Made with sustainable materials',
    'Easy to assemble',
    'Available in multiple colors'
  ],
  specs: [
    { name: 'Dimensions', value: '24"W x 25"D x 36"H' },
    { name: 'Weight', value: '15 lbs' },
    { name: 'Material', value: 'Recycled plastic and steel' },
    { name: 'Color Options', value: 'Black, White, Gray' }
  ],
  imageUrl: '/placeholder.svg?height=400&width=400'
}

export default async function ProductDetailPage() {
  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
    // In a real app, this would update the cart state or send a request to an API
  }
  const supabase = createClient()
  const { data: products } = await supabase.from('products').select('*')
  console.log(products[0])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Store
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-center"
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
              <Button className="flex-grow">
                Add to Cart
              </Button>
            </div>

            <Tabs defaultValue="features">
              <TabsList>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="features">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specs">
                <dl className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex">
                      <dt className="font-semibold w-1/3">{spec.name}:</dt>
                      <dd className="w-2/3">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardContent className="p-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                    <Image
                      src={'/placeholder.svg?height=200&width=200'}
                      alt={`Related Product ${item}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="font-semibold">Related Product {item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    $99.99
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black dark:border-t dark:border-white/10 py-8 px-4 mt-16">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          © 2023 MinimalStore. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
