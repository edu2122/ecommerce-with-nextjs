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
import { XIcon, ShoppingCart } from '@/components/icons'
import { useCart } from '@/hooks/use-cart'

export default function AsideCart() {
  const { items: cartItems, removeItem, clearCart } = useCart()
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
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  removeItem(item.id)
                }}
              >
                <XIcon className="h-4 w-4" />
              </Button>
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
              <Button
                className="w-full mt-4"
                variant="destructive"
                onClick={() => {
                  clearCart()
                }}
              >
                Clear Cart
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
