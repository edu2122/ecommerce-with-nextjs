import { Hero } from '@/components/sections/hero'
import { SectionCarousel } from '@/components/sections/section-carousel'

export default async function Home() {
  return (
    <div className="min-h-full text-gray-800 font-sans">
      <Hero />
      <main className="text-xl">
        <SectionCarousel sectionTitle='Popular Right Now'/>
      </main>
    </div>
  )
}
