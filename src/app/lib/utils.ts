import { type ProductType } from '@/types/product'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomLimitedProducts(
  products: ProductType[],
  limit: number
): ProductType[] {
  const randomizedProducts = products.sort(() => Math.random() - 0.5)
  return randomizedProducts.slice(0, limit)
}
