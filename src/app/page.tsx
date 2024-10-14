import { SectionFeaturedProducts } from './section-featured-products'
import { SectionHero } from './section-hero'
import { SectionSpecialsOffers } from './section-specials-offers'

export default async function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <SectionHero />
      <main className="text-xl">
        <SectionFeaturedProducts />
        <SectionSpecialsOffers />
      </main>
    </div>
  )
}
