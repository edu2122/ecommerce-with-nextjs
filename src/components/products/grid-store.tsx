import { Card, CardContent } from '@/components/ui/card'
import { useSupabase } from '@/hooks/use-supabase'
import { type ProductType } from '@/types/product'
import Link from 'next/link'

export default async function GridStore() {
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  return (
    <>
      {randomsProducts.map((product: ProductType) => {
        const { id, name, price, image_url: imageUrl } = product
        return (
          <Link key={id} href={`product/${id}`}>
            <Card className="overflow-hidden">
              <CardContent className="group p-4">
                <div className="shadow-xl sm:rounded-xl  mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90 transition duration-500 ease-in-out transform ">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="object-cover object-top w-full h-72 group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-110 md:group-hover:scale-125 transition duration-500 "
                  />
                </div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ${price}
                </p>
                <p className="text-sm text-gray-500">category - color - size</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </>
  )
}
