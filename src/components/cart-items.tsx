'use client'
import { type ProductType } from '@/types/product'
import { ButtonDecreaseQuantity, ButtonIncreaseQuantity } from './cart-buttons'
import { Card, CardContent } from './ui/card'
import { createClient } from '@/utils/supabase/client'
import { useCart } from '@/hooks/use-cart'

export default function CartItems() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const { items } = useCart()
  // const supabase = createClient()
  // const { data: order_cart } = await supabase
  //   .from('order_cart')
  //   .select('*, product_id:products(name, image_url, price, stock)')
  // if (order_cart === null) return
  return (
    <>
      {/* {order_cart.map((oderItem) => {
        const { id: idOrder, product_id } = oderItem
        const productPrice = product_id.price
        const productQuantity = product_id.stock
        const totalPrice = productPrice * productQuantity
        return (
          <Card key={idOrder}>
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="w-20 h-20  bg-gray-200 dark:bg-white/5 rounded-md">
                <img
                  className="w-full h-full rounded-md"
                  src={product_id.image_url}
                  alt={`${product_id.name}`}
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{product_id.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <ButtonDecreaseQuantity id={product_id.id} />
                <span>{productQuantity}</span>
                <ButtonIncreaseQuantity id={product_id.id} />
              </div>
            </CardContent>
          </Card>
        )
      })} */}
      {items.map((item: ProductType) => {
        const { id: idOrder } = item
        const productPrice = item.price
        const productQuantity = item.quantity
        const totalPrice = productPrice * productQuantity
        return (
          <Card key={idOrder}>
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="w-20 h-20  bg-gray-200 dark:bg-white/5 rounded-md">
                <img
                  className="w-full h-full rounded-md"
                  src={item.image_url}
                  alt={`${item.name}`}
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <ButtonDecreaseQuantity id={item.id} />
                <span>{productQuantity}</span>
                <ButtonIncreaseQuantity id={item.id} />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}
