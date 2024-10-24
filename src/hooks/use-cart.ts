import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from './use-toast'

import { type ProductType } from '@/types/product'

interface CartStore {
  items: ProductType[]
  addItem: (item: ProductType) => void
  removeItem: (id: string) => void
  increaseQuantityItem: (id: string) => void
  decreaseQuantityItem: (id: string) => void
  clearCart: () => void
}

interface AsideCartStore {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

export const useAsideCart = create<AsideCartStore>((set) => ({
  isOpen: false,
  openCart: () => {
    set({ isOpen: true })
  },
  closeCart: () => {
    set({ isOpen: false })
  }
}))

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (item: ProductType) => {
        const { items } = get()
        const existingItem = items.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
          if (existingItem.quantity < existingItem.stock) {
            set({
              items: items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            })
            toast({
              title: 'Item added to cart'
            })
          } else {
            toast({
              title: 'No more stock available',
              variant: 'destructive'
            })
          }
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }]
          })
          toast({
            title: 'Item added to cart'
          })
        }
      },
      removeItem: (id: string) => {
        const { items } = get()
        const removeItem = items.filter((item) => item.id !== id)
        set({ items: [...removeItem] })
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
      increaseQuantityItem: (id: string) => {
        const { items: currentItems } = get()
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
      decreaseQuantityItem: (id: string) => {
        const { items: currentItems } = get()
        const item = currentItems.find((item) => item.id === id)
        if (item && item.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          })
        } else {
          const { removeItem } = get()
          removeItem(item?.id ?? '')
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
