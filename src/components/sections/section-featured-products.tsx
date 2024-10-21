import { ProductsFeatured } from '@/components/products/products-list'
import { RecommendedProductSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'

export function SectionFeaturedProducts({
  sectionTitle
}: {
  sectionTitle: string
}) {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-left dark:text-white">
          Featured Products
        </h2>

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
          <ProductsFeatured />
        </Suspense>
      </div>
    </section>
  )
}
