import { WHATSAPP_NUMBER } from '../config/site'
import { getProduct } from '../data/products'
import type { CartItem, Customer } from '../types'
export const money = (value: number) => `S/ ${value.toFixed(2)}`
export const unitPrice = (item: CartItem) => { const p = getProduct(item.productId); return item.quality ? p.qualities![item.quality].price : p.price }
export const itemName = (item: CartItem) => { const p = getProduct(item.productId); return item.quality ? `${p.name} — ${p.qualities![item.quality].label}` : p.name }
export const total = (items: CartItem[]) => items.reduce((sum, item) => sum + unitPrice(item) * item.kilos, 0)
export const makeWhatsAppUrl = (items: CartItem[], customer: Customer) => { const rows = items.map((item) => `🥔 ${itemName(item)}\n${item.kilos} kg × ${money(unitPrice(item))}\nSubtotal: ${money(item.kilos * unitPrice(item))}`).join('\n\n'); const message = `Hola, PAPAY. Quiero realizar un pedido:\n\n${rows}\n\nTOTAL: ${money(total(items))}\n\nNombre: ${customer.name}\nCelular: ${customer.phone}\nDirección: ${customer.address || 'Por coordinar'}`; return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` }
