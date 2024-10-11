import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from './use-toast'

import { type ProductType } from '@/types/product'

interface CartItem extends ProductType {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (data: ProductType) => void
  removeItem: (id: string) => void
  clearCart: () => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {
        const { items } = get()
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        set({
          items: [...items, { ...data, quantity: 1 }]
        })

        toast({
          title: 'Item added to cart'
        })
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast({
          title: 'Item removed from cart',
          variant: 'destructive'
        })
      },
      clearCart: () => {
        set({
          items: []
        })
        toast({
          title: 'Cleared cart',
          variant: 'destructive'
        })
      },
      increaseQuantity: (id: string) => {
        const currentItems = get().items
        const item = currentItems.find((item) => item.id === id)
        if (item && item.quantity < item.stock) {
          set({
            items: currentItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          })
        } else {
          toast({
            title: 'No more stock available',
            variant: 'destructive'
          })
        }
      },
      decreaseQuantity: (id: string) => {
        const currentItems = get().items
        const item = currentItems.find((item) => item.id === id)
        if (item && item.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          })
        } else {
          toast({
            title: 'Item removed from cart',
            variant: 'destructive'
          })
        }
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
