import { SectionFeaturedProducts } from './section-featured-products'
import { SectionHero } from './section-hero'
import { SectionSpecialsOffers } from './section-specials-offers'
import { createClient } from '../utils/supabase/server'

export default async function Home() {
  const supabase = createClient()
  const { data: products } = await supabase.from('products').select('*')
  console.log(products)
  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <main className="text-xl">
        {/* <pre className="text-white">{JSON.stringify(products, null, 2)}</pre> */}
        <SectionHero />
        <SectionFeaturedProducts products={products} />
        <SectionSpecialsOffers />
      </main>
    </div>
  )
}
