import ProductsStore from '@/components/products/products-store'
import AsideCart from '@/components/cart/aside-cart'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Suspense } from 'react'
import { CardProductSkeleton } from '@/components/skeletons'
import { useSupabase } from '@/hooks/use-supabase'

const categories = ['Clothing', 'Shoes', 'Accessories', 'Home', 'Beauty']

export default async function StorePage() {
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts.slice(0, 7)
  const lengthProducts = productsLimited.length
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full"
          />
          <AsideCart />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Menu */}
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>

              <Slider max={100} step={1} defaultValue={[33]} />

              <div className="flex justify-between mt-2">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense
                fallback={
                  <>
                    {Array.from({ length: lengthProducts }).map((_, index) => (
                      <CardProductSkeleton key={index} />
                    ))}
                  </>
                }
              >
                <ProductsStore />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
