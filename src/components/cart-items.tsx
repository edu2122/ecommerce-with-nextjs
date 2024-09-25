import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

import { Minus, Plus, Trash } from '@/components/icons'
import { createClient } from '@/utils/supabase/client'

export default async function CartItems() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const supabase = createClient()
  // // const { data: order_cart } = await supabase.from('order_cart').select(
  // //   `*,
  // //   product_id:products(name, image_url)
  // //   `
  // // )
  const { data: order_cart } = await supabase
    .from('order_cart')
    .select('*, product_id:products(name, image_url)')
  console.log(order_cart)
  if (order_cart === null) return
  return (
    <>
      {order_cart.map(({ id, price, quantity, product_id }) => (
        <Card key={id}>
          <CardContent className="p-4 flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 dark:bg-white/5 rounded-md">
              <img src={product_id.image_url} alt={`${product_id.name}`} />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold">{product_id.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ${price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="w-7 h-7">
                <Minus className="h-4 w-4" />
              </Button>
              <span>{quantity}</span>
              <Button variant="outline" size="icon" className="w-7 h-7">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="w-7 h-7">
              <Trash className="h-5 w-5 dark:text-white text-black" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
