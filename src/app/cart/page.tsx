import { Suspense } from 'react'
import CartItems from '@/components/cart-items'
import SectionMightAlsoLike from './section-migth-also-like'
import { CartItemSkeleton, OrderSummarySkeleton } from '@/components/skeletons'
import OrderSummary from '@/components/order-summary'

// app/cart/page.tsx
export default function CartPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart 444</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            <Suspense
              fallback={
                <div className="flex flex-col gap-4">
                  <CartItemSkeleton />
                  <CartItemSkeleton />
                </div>
              }
            >
              <CartItems />
            </Suspense>
          </div>

          {/* Subtotal and Checkout */}
          <div>
            <Suspense fallback={<OrderSummarySkeleton />}>
              <OrderSummary />
            </Suspense>
          </div>
        </div>

        {/* You Might Also Like Section */}
        <section className="mt-16">
          <SectionMightAlsoLike />
        </section>
      </main>
    </div>
  )
}
