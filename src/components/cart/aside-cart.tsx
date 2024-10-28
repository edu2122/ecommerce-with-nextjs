'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { type ProductType } from '@/types/product'
import { ShoppingCart } from '@/components/icons/icons'
import { useAsideCart, useCart } from '@/hooks/use-cart'
import {
  ButtonClearCart,
  ButtonRemoveFromCart,
  ButtonIncreaseQuantity,
  ButtonDecreaseQuantity
} from './cart-buttons'

export default function AsideCart() {
  const { items: cartItems } = useCart()
  const { isOpen, closeCart, openCart } = useAsideCart()

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(isOpen) => {
        isOpen ? openCart() : closeCart()
      }}
    >
      <SheetTrigger asChild>
        <Button
          className="text-slate-800 dark:text-white"
          onClick={openCart}
          variant="ghost"
          size="icon"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="relative flex w-full flex-col justify-between px-1 py-4 ">
          {cartItems.map((item: ProductType) => (
            <div
              key={item.id}
              className="relative flex w-full flex-row justify-between px-1 py-4"
            >
              <div className="absolute z-40 -ml-1 -mt-2">
                <ButtonRemoveFromCart id={item.id} />
              </div>
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center space-x-8">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="rounded size-16"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                  </div>
                </div>
              </div>
              <div className="flex h-16 flex-col justify-between">
                <p className="flex justify-center space-y-2 text-right text-sm">
                  {item.price * item.quantity} $ USD
                </p>
                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                  <ButtonDecreaseQuantity id={item.id} />
                  <span className='text-center w-6'>{item.quantity}</span>
                  <ButtonIncreaseQuantity id={item.id} />
                </div>
              </div>
            </div>
          ))}
          {cartItems.length === 0 && <p>Your cart is empty</p>}
        </div>
        {cartItems.length > 0 && (
          <>
            <Button className="w-full mt-4">
              Subtotal ($
              {cartItems
                .reduce((sum: number, item: ProductType) => sum + item.price, 0)
                .toFixed(2)}
              )
            </Button>
            <ButtonClearCart />
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
