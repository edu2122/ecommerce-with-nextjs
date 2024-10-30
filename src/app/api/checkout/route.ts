import { NextResponse } from 'next/server'
import { type ProductType } from '@/types/product'
import { Stripe } from 'stripe'
import { type NextApiRequest, type NextApiResponse } from 'next'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing Stripe secret key')
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { cartItems } = await req.json()
  // Crear líneas de productos para Stripe
  const lineItems = cartItems.map((item: ProductType) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image_url]
      },
      unit_amount: item.price * 100 // Stripe trabaja en centavos
    },
    quantity: item.quantity
  }))
  try {
    // Crear una sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cart'
    })
    console.log(session)
    return NextResponse.json({ url: session.url })
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}
