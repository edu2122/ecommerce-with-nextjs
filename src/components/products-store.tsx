import { createClient } from '@/utils/supabase/client'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default async function ProductsStore() {
//   await new Promise((resolve) => setTimeout(resolve, 2000))
  const supabase = createClient()
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  return (
    <>
      {randomsProducts.map(
        ({ id, name, price, image_url: imageUrl }) => {
          return (
            <Card key={id} className="overflow-hiddenw w-">
              <CardContent className="group p-4">
                <div className="shadow-xl sm:rounded-xl  mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-black/90 transition duration-500 ease-in-out transform ">
                  <img src={imageUrl} alt={name} className="object-cover object-top w-full h-72 group-hover:opacity-85 dark:group-hover:opacity-75 md:scale-110 md:group-hover:scale-125 transition duration-500 " />
                </div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ${price}
                </p>
                <p className="text-sm text-gray-500">category - color - size</p>
                <Button className="w-full mt-2">Add to Cart</Button>
              </CardContent>
            </Card>
          )
        }
      )}
    </>
  )
}
