import { useState } from 'react'
import type { CartItem, Customer } from '../types'
import { itemName, makeWhatsAppUrl, money, totalKilos, unitPrice } from '../utils/order'

type Errors = Partial<Record<keyof Customer, string>>

export function CheckoutModal({ items, total, onClose, onOrdered }: { items: CartItem[]; total: number; onClose: () => void; onOrdered: () => void }) {
  const [customer, setCustomer] = useState<Customer>({ name: '', phone: '', address: '' })
  const [errors, setErrors] = useState<Errors>({})
  const update = (field: keyof Customer, value: string) => {
    setCustomer((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: Errors = {
      name: customer.name.trim() ? undefined : 'Ingresa tu nombre.',
      phone: /^9\d{8}$/.test(customer.phone.replace(/\s/g, '')) ? undefined : 'Ingresa un celular peruano válido de 9 dígitos.',
      address: customer.address.trim() ? undefined : 'Ingresa la dirección exacta de entrega.',
    }
    setErrors(next)
    if (next.name || next.phone || next.address) return
    window.open(makeWhatsAppUrl(items, customer), '_blank', 'noopener,noreferrer')
    onOrdered()
  }
  return <div className="overlay" role="presentation"><section className="checkout" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
    <button className="close" onClick={onClose} aria-label="Cerrar checkout">×</button>
    <div className="checkout-form">
      <p className="eyebrow">Último paso</p><h2 id="checkout-title">Revisa tu pedido.</h2>
      <p>Completa tus datos. Abriremos WhatsApp con tu pedido listo para enviar.</p>
      <form onSubmit={submit} noValidate autoComplete="off">
        <label>Nombre<input value={customer.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" aria-invalid={!!errors.name}/>{errors.name && <small>{errors.name}</small>}</label>
        <label>Celular<input name="papay-order-phone" value={customer.phone} onChange={(e) => update('phone', e.target.value)} inputMode="tel" autoComplete="off" aria-invalid={!!errors.phone}/>{errors.phone && <small>{errors.phone}</small>}</label>
        <label>Dirección (debe ser exacta)<textarea value={customer.address} onChange={(e) => update('address', e.target.value)} autoComplete="street-address" rows={3} aria-invalid={!!errors.address}/>{errors.address && <small>{errors.address}</small>}</label>
        <button className="add-button" type="submit">Enviar mi pedido por WhatsApp <span>→</span></button>
      </form>
    </div>
    <aside className="checkout-summary"><p className="eyebrow">Resumen del pedido</p>
      {items.map((item) => <div className="checkout-line" key={`${item.productId}-${item.quality}`}><span>{itemName(item)}<small>{item.kilos} kg × {money(unitPrice(item))}</small></span><strong>{money(unitPrice(item) * item.kilos)}</strong></div>)}
      <div className="checkout-kilos"><span>Total de kilos</span><strong>{totalKilos(items)} kg</strong></div>
      <div className="checkout-total"><span>Total final</span><strong>{money(total)}</strong></div>
    </aside>
  </section></div>
}
