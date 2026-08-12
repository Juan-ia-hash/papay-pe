import type { Product } from '../types'
import canchayImage from '../../f3fb2a5c-8c39-4e14-af2f-c6316c4f2507.png'
import yungayImage from '../../d095b72a-6664-4fa7-afe0-ecd06a972ed5.png'
import amarillaImage from '../../667eef3d-ebf7-434b-89dc-a358a5f96105.png'
import huayroImage from '../../9c94fa9c-93dd-4b07-873c-d2e353deeac2.png'
import nativasImage from '../../4d4de3f0-1f72-4bd8-b803-59cb354a3cc4.png'
import peruanitaImage from '../../0f209d7e-97de-46fe-9463-724549e50d76.png'
export const products: Product[] = [
  { id: 'canchay', name: 'Papa Chanchán', image: canchayImage, price: 2, description: 'Una variedad peruana para acompañar las recetas de todos los días.', accent: '#d97775', qualities: { primera: { label: 'Primera', price: 2 }, segunda: { label: 'Segunda', price: 1.5 } } },
  { id: 'yungay', name: 'Papa Yungay', image: yungayImage, price: 2, description: 'Elige la calidad que prefieras y disfruta su sabor en tu mesa.', accent: '#e7b94f', qualities: { primera: { label: 'Primera', price: 2 }, segunda: { label: 'Segunda', price: 1.5 } } },
  { id: 'amarilla', name: 'Papa Amarilla', image: amarillaImage, price: 3, description: 'Su característico tono dorado es parte de la diversidad que celebramos.', accent: '#e4a62d', qualities: { primera: { label: 'Primera', price: 3 }, segunda: { label: 'Segunda', price: 2 } } },
  { id: 'huayro', name: 'Papa Huayro', image: huayroImage, price: 3, description: 'Una variedad que nos conecta con la riqueza de los campos peruanos.', accent: '#9c715a', qualities: { primera: { label: 'Primera', price: 3 }, segunda: { label: 'Segunda', price: 2 } } },
  { id: 'nativas', name: 'Papas Nativas', image: nativasImage, price: 3, description: 'Colores y formas que expresan la enorme diversidad de nuestra tierra.', accent: '#725a76', qualities: { primera: { label: 'Primera', price: 3 }, segunda: { label: 'Segunda', price: 2 } } },
  { id: 'peruanita', name: 'Papa Peruanita', image: peruanitaImage, price: 3, description: 'Una papa de colores vivos, lista para hacer especial cualquier mesa.', accent: '#cf6f6a', qualities: { primera: { label: 'Primera', price: 3 }, segunda: { label: 'Segunda', price: 2 } } }
]
export const getProduct = (id: string) => products.find((product) => product.id === id)!
