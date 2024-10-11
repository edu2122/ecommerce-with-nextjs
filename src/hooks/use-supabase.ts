import { createClient } from '@/utils/supabase/client'

export const useSupabase = async () => {
  const getProducts = async () => {
    const supabase = createClient()
    const { data: products } = await supabase.from('products').select('*')
    return products
  }

  return {
    getProducts
  }
}
