'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { PaypalIcon, CreditCardIcon } from '@/components/icons/icons'
import { useCart } from '@/hooks/use-cart'
import { type ProductType } from '@/types/product'
import { checkoutStripe } from '@/app/lib/actions'

export default async function OrderSummary() {
  const { items: cartItems } = useCart()
  const subtotal = cartItems.reduce(
    (acc: number, item: ProductType) => acc + item.price * item.quantity,
    0
  )
  const total = subtotal + 20
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{subtotal}$</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{total}$</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" onClick={async () => { await checkoutStripe(cartItems) }}>Proceed to Checkout</Button>
        <Button variant="outline" className="w-full" >
          <CreditCardIcon className="w-5 h-5 mr-2" />
          Pay with PayPal
          <PaypalIcon className="ml-2 size-5 text-blue-400" />
        </Button>
      </CardFooter>
    </Card>
  )
}
