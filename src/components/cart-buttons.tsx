'use client'
import { useCart } from '@/hooks/use-cart'
import { Button } from './ui/button'
import { type ProductType } from '@/types/product'

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
