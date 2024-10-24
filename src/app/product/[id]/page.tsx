import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSupabase } from '@/hooks/use-supabase'
import { SectionCarousel } from '@/components/sections/section-carousel'
import { ButtonAddToCart } from '@/components/cart/cart-buttons'
import { Button } from '@/components/ui/button'
const colors = [
  { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-400' },
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-gray-400' }
]

const sizes = [
  { name: 'XS', inStock: true },
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true }
]

export default async function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const { getProductById } = await useSupabase()
  const product = await getProductById(id)
  const { name, price, description, image_url: imageUrl } = product
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-center ">
              {/* Image gallery */}
              <div className="flex flex-col items-center">
                <div className="overflow-hidden rounded-lg max-w-[500px]">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="size-[500px] object-cover object-center"
                  />
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  <Button className="rounded-full bg-transparent border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button className="rounded-full  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Product info */}
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight">
                  {name}
                </h1>
                <div className="mt-3">
                  <h2 className="sr-only">{description}</h2>
                  <p className="text-3xl">${price}</p>
                </div>

                {/* Color picker */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium">Color</h3>
                  <div className="mt-2">
                    <div className="flex items-center space-x-3">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          className={`relative p-0.5 rounded-full flex items-center justify-center focus:outline-none ring-2 ${color.selectedClass}`}
                        >
                          <span className="sr-only">{color.name}</span>
                          <span
                            className={`h-8 w-8 border border-black border-opacity-10 rounded-full ${color.class}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Size picker */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                      Size guide
                    </a>
                  </div>
                  <div className="mt-2">
                    <div className="grid grid-cols-7 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size.name}
                          className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none"
                        >
                          {size.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <ButtonAddToCart
                  className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  product={product}
                />

                <p className="mt-6 text-sm text-gray-400">{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <SectionCarousel className="mt-16" sectionTitle="Related Products" />
      </main>
    </div>
  )
}
