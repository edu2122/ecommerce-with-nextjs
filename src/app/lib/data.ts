'use server'
import { createClient } from '@/utils/supabase/server'

export async function fetchProducts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const supabase = createClient()
    const { data: products } = await supabase.from('products').select('*')
    return products
  } catch (error) {
    throw new Error('Error fetching products')
  }
}
