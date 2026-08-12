import { useEffect, useMemo, useState } from 'react'
import type { CartItem, Quality } from '../types'
import { unitPrice } from '../utils/order'
const KEY = 'papay-cart'
export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]').map((item: CartItem) => ({ ...item, quality: item.quality || 'segunda' })) } catch { return [] } })
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items])
  const add = (productId: string, kilos: number, quality: Quality = 'segunda') => setItems((old) => { const index = old.findIndex((i) => i.productId === productId && i.quality === quality); return index >= 0 ? old.map((i, n) => n === index ? { ...i, kilos: i.kilos + kilos } : i) : [...old, { productId, kilos, quality }] })
  const changeKilos = (index: number, delta: number) => setItems((old) => old.flatMap((item, n) => n !== index ? [item] : item.kilos + delta > 0 ? [{ ...item, kilos: item.kilos + delta }] : []))
  const changeQuality = (index: number, quality: Quality) => setItems((old) => old.map((item, n) => n === index ? { ...item, quality } : item))
  const remove = (index: number) => setItems((old) => old.filter((_, n) => n !== index))
  const summary = useMemo(() => ({ total: items.reduce((sum, item) => sum + unitPrice(item) * item.kilos, 0), kilos: items.reduce((sum, item) => sum + item.kilos, 0) }), [items])
  return { items, add, changeKilos, changeQuality, remove, clear: () => setItems([]), ...summary }
}
