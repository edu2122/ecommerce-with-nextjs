import { SectionFeaturedProducts } from './section-featured-products'
import { SectionHero } from './section-hero'
import { SectionSpecialsOffers } from './section-specials-offers'

export default async function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <main className="text-xl">
        <SectionHero />
        <SectionFeaturedProducts />
        <SectionSpecialsOffers />
      </main>
    </div>
  )
}
