export type Quality = 'primera' | 'segunda'
export type Product = { id: string; name: string; image: string; price: number; description: string; accent: string; qualities: Record<Quality, { label: string; price: number }> }
export type CartItem = { productId: string; kilos: number; quality: Quality }
export type Customer = { name: string; address: string }
