'use client'
import { useAsideCart, useCart } from '@/hooks/use-cart'
import { Button } from '../ui/button'
import { type ProductType } from '@/types/product'
import { Minus, Plus, XIcon } from '../icons/icons'

export function ButtonAddToCart({
  product,
  className
}: {
  product: ProductType
  className?: string
}) {
  const { addItem } = useCart()
  const { openCart } = useAsideCart()
  return (
    <Button
      onClick={() => {
        addItem(product)
        openCart()
      }}
      variant="outline"
      className={`${className} dark:text-white`}
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
      className='size-[24px] rounded-full bg-neutral-500 p-0'
      onClick={() => {
        removeItem(id)
      }}
    >
      <XIcon className="size-[12px]" />
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
      variant="ghost"
      size="icon"
      className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
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
      variant="ghost"
      size="icon"
      className="h-full ease flex min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
      onClick={() => {
        decreaseQuantityItem(id)
      }}
    >
      <Minus className="h-4 w-4" />
    </Button>
  )
}
