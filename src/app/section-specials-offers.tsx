export function SectionSpecialsOffers() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Special Offers
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {[1, 2, 3, 4, 5].map((offer) => (
              <div key={offer} className="flex-none w-64 group">
                <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg'}
                    alt={`Offer ${offer}`}
                    className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded-full text-sm font-medium">
                    20% OFF
                  </div>
                </div>
                <h3 className="text-lg font-medium">Special Item {offer}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="line-through mr-2">$129.99</span>
                  <span className="text-green-600 dark:text-green-400">
                    $103.99
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
