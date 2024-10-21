import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { PaypalIcon, CreditCardIcon } from '@/components/icons/icons'

export default async function OrderSummary() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$267</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$280</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">Proceed to Checkout</Button>
        <Button variant="outline" className="w-full">
          <CreditCardIcon className="w-5 h-5 mr-2" />
          Pay with PayPal
          <PaypalIcon className="ml-2 size-5 text-blue-400" />
        </Button>
      </CardFooter>
    </Card>
  )
}
