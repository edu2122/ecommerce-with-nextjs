import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from './use-toast'

import { type ProductType } from '@/types/product'

interface CartStore {
  items: ProductType[]
  addItem: (data: ProductType) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (existingItem) {
          return toast({
            title: 'Item already in cart',
            variant: 'destructive'
          })
        }
        set({
          items: [...get().items, data]
        })
        toast({
          title: 'Item added to cart'
        })
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast({
          title: 'Item removed from cart'
        })
      },
      clearCart: () => {
        set({
          items: []
        })
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
