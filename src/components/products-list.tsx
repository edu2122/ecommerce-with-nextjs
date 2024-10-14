import { ButtonAddToCart } from './cart-buttons'
import { type ProductType } from '@/types/product'
import { useSupabase } from '@/hooks/use-supabase'

export async function ProductsList() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts.slice(0, 4)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {productsLimited.map((product: ProductType) => {
        const { id, name, price, image_url: imageUrl } = product
        return (
          <div key={id} className="group w-80">
            <div className="shadow-xl sm:rounded-xl  mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90 transition duration-500 ease-in-out transform ">
              <img
                src={imageUrl}
                alt={`Product ${name}`}
                className="object-cover object-top w-full h-72 group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-110 md:group-hover:scale-125 transition duration-500 "
              />
            </div>
            <h3 className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis hover:text-pretty text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              ${price}
            </p>
            <ButtonAddToCart product={product} />
          </div>
        )
      })}
    </div>
  )
}

export async function ProductsOffer() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts.slice(0, 7)

  return (
    <div className="flex overflow-x-auto space-x-6 pb-4">
      {productsLimited.map(({ id, name, price, image_url: imageUrl }) => (
        <div key={id} className="flex-none w-64 group">
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-white/5 transition duration-500 ease-in-out transform shadow-xl">
            <img
              src={imageUrl}
              alt={`Offer product ${name}`}
              className="object-cover object-top w-full h-72 group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-110 md:group-hover:scale-125 transition duration-500"
            />
            <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded-full text-sm font-medium">
              20% OFF
            </div>
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
        </div>
      ))}
    </div>
  )
}
