import { createClient } from '@/utils/supabase/client'

export const useSupabase = async () => {
  const getProducts = async () => {
    const supabase = createClient()
    const { data: products } = await supabase.from('products').select('*')
    return products
  }

  const getProductById = async (id: string) => {
    const supabase = createClient()
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      console.error('Error fetching product by id:', error)
      return null
    }

    return product
  }

  return {
    getProducts,
    getProductById
  }
}
