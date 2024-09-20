import { RecommendedProductSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'
import { ProductsOffer } from '@/components/products-list'

export function SectionSpecialsOffers() {
  return (
    <section className="bg-white dark:bg-black py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl text-black dark:text-white/90 font-bold mb-8 text-center">
          Special Offers
        </h2>
        <div className="relative">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <RecommendedProductSkeleton />
                <RecommendedProductSkeleton />
                <RecommendedProductSkeleton />
                <RecommendedProductSkeleton />
              </div>
            }
          >
            <ProductsOffer />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
