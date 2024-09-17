import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Minus } from '../icons/minus'
import { Plus } from '../icons/plus'
import { Trash } from '../icons/trash'
import { PaypalIcon } from '../icons/paypal'
import { CreditCardIcon } from '../icons/credit-card'

// app/cart/page.tsx
export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'Minimal Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Minimal Product 2', price: 149.99, quantity: 1 }
  ]

  const recommendedProducts = [
    { id: 3, name: 'Recommended Product 1', price: 79.99 },
    { id: 4, name: 'Recommended Product 2', price: 89.99 },
    { id: 5, name: 'Recommended Product 3', price: 69.99 },
    { id: 6, name: 'Recommended Product 4', price: 99.99 }
  ]

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Your Cart ({`${cartItems.length}`})
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-white/5 rounded-md"></div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className='w-7 h-7'>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="icon" className='w-7 h-7'>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className='w-7 h-7'>
                    <Trash className="h-5 w-5 dark:text-white text-black" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subtotal and Checkout */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
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
          </div>
        </div>

        {/* You Might Also Like Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="flex-none w-64">
                  <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden bg-card dark:bg-card">
                    <Image
                      width={400}
                      height={400}
                      src="/images/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.png"
                      alt={product.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button variant="outline" className="mt-2 w-full">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
            {/* <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
            >
              <ChevronRight className="h-6 w-6" />
            </Button> */}
          </div>
        </section>
      </main>
    </div>
  )
}
