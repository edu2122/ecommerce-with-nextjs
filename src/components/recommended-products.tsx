import { createClient } from '@/utils/supabase/client'
import { ButtonAddToCart } from './cart-buttons'
import { type ProductType } from '@/types/product'

export default async function RecommendedProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const supabase = createClient()
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts.slice(0, 8)
  return (
    <>
      {productsLimited.map((product: ProductType) => {
        const { id, name, price, image_url: imageUrl } = product
        return (
          <div key={id} className="flex-none group w-64">
            <div className="shadow-xl sm:rounded-xl  mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90 transition duration-500 ease-in-out transform ">
              <img
                width={400}
                height={400}
                src={imageUrl}
                alt={name}
                className="object-cover object-top w-full h-72 group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-110 md:group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis hover:text-pretty">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ${price.toFixed(2)}
            </p>
            <ButtonAddToCart product={product} />
          </div>
        )
      })}
    </>
  )
}
