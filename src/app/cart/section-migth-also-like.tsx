import RecommendedProducts from '@/components/recommended-products'
import { RecommendedProductSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'

export default function SectionMightAlsoLike() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-6 pb-4">
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
            <RecommendedProducts />
          </Suspense>
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
    </>
  )
}
