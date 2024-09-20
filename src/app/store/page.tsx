'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { Moon, Sun, Search, ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import { ShoppingCart } from '../icons/shopping-cart'
import { ModeToggle } from '@/components/mode-toggle'

const categories = ['Clothing', 'Shoes', 'Accessories', 'Home', 'Beauty']
const colors = ['Black', 'White', 'Red', 'Blue', 'Green']
const sizes = ['XS', 'S', 'M', 'L', 'XL']

interface Product {
  id: number
  name: string
  price: number
  category: string
  color: string
  size: string
  imageUrl: string
}

const products: Product[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 20,
  category: categories[Math.floor(Math.random() * categories.length)],
  color: colors[Math.floor(Math.random() * colors.length)],
  size: sizes[Math.floor(Math.random() * sizes.length)],
  imageUrl: `/placeholder.svg?height=200&width=200&text=Product+${i + 1}`
}))

export default function StorePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (searchQuery === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedColors.length === 0 ||
          selectedColors.includes(product.color)) &&
        (selectedSizes.length === 0 || selectedSizes.includes(product.size)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    setFilteredProducts(filtered)
  }, [
    searchQuery,
    selectedCategories,
    selectedColors,
    selectedSizes,
    priceRange
  ])

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product])
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-sm dark:shadow-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            MinimalStore
          </Link>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          removeFromCart(item.id)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {cartItems.length === 0 && <p>Your cart is empty</p>}
                  {cartItems.length > 0 && (
                    <Button className="w-full mt-4">
                      Checkout ($
                      {cartItems
                        .reduce((sum, item) => sum + item.price, 0)
                        .toFixed(2)}
                      )
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
            className="w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Menu */}
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories((prev) => [...prev, category])
                      } else {
                        setSelectedCategories((prev) =>
                          prev.filter((c) => c !== category)
                        )
                      }
                    }}
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Colors</h3>
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedColors((prev) => [...prev, color])
                      } else {
                        setSelectedColors((prev) =>
                          prev.filter((c) => c !== color)
                        )
                      }
                    }}
                  />
                  <label htmlFor={`color-${color}`}>{color}</label>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sizes</h3>
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedSizes((prev) => [...prev, size])
                      } else {
                        setSelectedSizes((prev) =>
                          prev.filter((s) => s !== size)
                        )
                      }
                    }}
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="aspect-w-1 aspect-h-1 w-full mb-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.category} - {product.color} - {product.size}
                    </p>
                    <Button
                      onClick={() => {
                        addToCart(product)
                      }}
                      className="w-full mt-2"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
