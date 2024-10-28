import { type ProductType } from '@/types/product'
import { useSupabase } from '@/hooks/use-supabase'
import Link from 'next/link'
import { getRandomLimitedProducts } from '@/app/lib/utils'

export async function CarouselProducts() {
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const productsLimited = getRandomLimitedProducts(products, 7)

  return (
    <div className="flex overflow-x-auto space-x-6 pb-4">
      {productsLimited.map((product: ProductType) => {
        const { id, name, price, image_url: imageUrl } = product
        return (
          <Link
            key={id}
            className="flex-none w-64 group border-gray-400"
            href={`/product/${id}`}
          >
            <div className="mb-4 rounded-lg overflow-hidden border transition duration-500 ease-in-out transform shadow-xl">
              <img
                src={imageUrl}
                alt={`Offer product ${name}`}
                className="object-cover object-top w-full h-72  group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-105 md:group-hover:scale-110 transition duration-500"
              />
              {/* <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded-full text-sm font-medium">
              20% OFF
            </div> */}
            </div>
            <h3 className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis text-black/90 dark:text-white/90">
              Special Item: {name}
            </h3>
            <p className="text-black/80 dark:text-white/80 mb-2">
              <span className="line-through mr-2">$129.99</span>
              <span className="text-green-600 font-semibold dark:text-green-400">
                ${price}
              </span>
            </p>
          </Link>
        )
      })}
    </div>
  )
}
