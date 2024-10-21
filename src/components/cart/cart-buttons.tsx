'use client'
import { useCart } from '@/hooks/use-cart'
import { Button } from '../ui/button'
import { type ProductType } from '@/types/product'
import { Minus, Plus, XIcon } from '../icons/icons'

export function ButtonAddToCart({ product }: { product: ProductType }) {
  const { addItem } = useCart()
  return (
    <Button
      onClick={() => {
        addItem(product)
      }}
      variant="outline"
      className="mt-2 w-full dark:text-white"
    >
      Add to Cart
    </Button>
  )
}

export function ButtonRemoveFromCart({ id }: { id: string }) {
  const { removeItem } = useCart()
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        removeItem(id)
      }}
    >
      <XIcon className="h-4 w-4" />
    </Button>
  )
}

export function ButtonClearCart() {
  const { clearCart } = useCart()
  return (
    <Button
      className="w-full mt-4"
      variant="destructive"
      onClick={() => {
        clearCart()
      }}
    >
      Clear Cart
    </Button>
  )
}

export function ButtonIncreaseQuantity({ id }: { id: string }) {
  const { increaseQuantityItem } = useCart()
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-7 h-7"
      onClick={() => {
        increaseQuantityItem(id)
      }}
    >
      <Plus className="h-4 w-4" />
    </Button>
  )
}

export function ButtonDecreaseQuantity({ id }: { id: string }) {
  const { decreaseQuantityItem } = useCart()
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-7 h-7"
      onClick={() => {
        decreaseQuantityItem(id)
      }}
    >
      <Minus className="h-4 w-4" />
    </Button>
  )
}
