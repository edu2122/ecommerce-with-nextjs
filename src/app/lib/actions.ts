import { type ProductType } from '@/types/product'

export const checkoutStripe = async (cartItems: ProductType[]) => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({ cartItems }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!res.ok) {
    console.error('Error:', res.statusText)
    return
  }
  const data = await res.json()
  window.location.href = data.url
}
