'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import { type ProductType } from '@/types/product'
import { ShoppingCart } from '@/components/icons'
import { useCart } from '@/hooks/use-cart'
import { ButtonClearCart, ButtonRemoveFromCart } from './cart-buttons'

export default function AsideCart() {
  const { items: cartItems } = useCart()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {cartItems.map((item: ProductType) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="rounded size-14"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price}
                  </p>
                </div>
              </div>
              <ButtonRemoveFromCart id={item.id} />
            </div>
          ))}
          {cartItems.length === 0 && <p>Your cart is empty</p>}
          {cartItems.length > 0 && (
            <>
              <Button className="w-full mt-4">
                Checkout ($
                {cartItems
                  .reduce(
                    (sum: number, item: ProductType) => sum + item.price,
                    0
                  )
                  .toFixed(2)}
                )
              </Button>
              <ButtonClearCart />
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
