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
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto  pr-4 ">
          {cartItems.map((item: ProductType) => (
            <div
              key={item.id}
              className="flex items-center justify-between pb-4 border-b border-white"
            >
              <div className="flex items-center space-x-8">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="rounded size-16"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price * item.quantity}
                  </p>
                  <div className="flex items-center gap-x-4">
                    <ButtonDecreaseQuantity id={item.id} />
                    <span>{item.quantity}</span>
                    <ButtonIncreaseQuantity id={item.id} />
                  </div>
                </div>
              </div>
              <ButtonRemoveFromCart id={item.id} />
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
