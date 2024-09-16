import { Button } from '@/components/ui/button'

export function SectionFeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="group">
              <div className="aspect-w-1 aspect-h-1 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={
                    'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg'
                  }
                  alt={`Product ${product}`}
                  className="object-cover object-center w-full h-full group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="text-lg font-medium dark:text-white">Minimal Product {product}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">$99.99</p>
              <Button variant="outline" className="w-full dark:bg-gray-900 dark:text-white dark:hover:opacity-50 outline-slate-300 transition-opacity">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
