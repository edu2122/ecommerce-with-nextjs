import { CarouselProductSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'
import { CarouselProducts } from '../products/carousel-products'
import { useSupabase } from '@/hooks/use-supabase'
import { getRandomLimitedProducts } from '@/app/lib/utils'
export async function SectionCarousel({
  sectionTitle,
  className
}: {
  sectionTitle: string
  className?: string
}) {
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const productsLimited = getRandomLimitedProducts(products, 7)
  const lengthProducts = productsLimited.length
  return (
    <section className={`${className} bg-white dark:bg-black py-16 px-4`}>
      <div className="container mx-auto">
        <h2 className="text-4xl text-black dark:text-white/90 font-bold mb-8 text-left">
          {sectionTitle}
        </h2>
        <div className="relative">
          <Suspense
            fallback={
              <div className="flex overflow-x-auto space-x-6 pb-4">
                {Array.from({ length: lengthProducts }).map((_, index) => (
                  <CarouselProductSkeleton key={index} />
                ))}
              </div>
            }
          >
            <CarouselProducts />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
