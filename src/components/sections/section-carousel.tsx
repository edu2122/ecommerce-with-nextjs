import { CarouselProductSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'
import { CarouselProducts } from '../products/carousel-products'
import { useSupabase } from '@/hooks/use-supabase'
export async function SectionCarousel({
  sectionTitle
}: {
  sectionTitle: string
}) {
  const { getProducts } = await useSupabase()
  const products = await getProducts()
  if (products === null) return
  const randomsProducts = products.sort(() => Math.random() - 0.5)
  const productsLimited = randomsProducts.slice(0, 7)
  const lengthProducts = productsLimited.length
  return (
    <section className="bg-white dark:bg-black py-16 px-4">
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
