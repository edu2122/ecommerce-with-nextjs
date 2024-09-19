import { createClient } from '@/utils/supabase/client'
import { Button } from './ui/button'

export async function ProductsList() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const supabase = createClient()
  const { data: products } = await supabase.from('products').select('*')

  if (products === null) return
  const productsLimited = products.slice(0, 4)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {productsLimited.map((product) => {
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
            <h3 className="text-lg font-medium text-dark dark:text-white">
              {`Minimal Product ${name}`}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              ${price}
            </p>
            <Button variant="outline" className="mt-2 w-full dark:text-white">
              Add to Cart
            </Button>
          </div>
        )
      })}
    </div>
  )
}
