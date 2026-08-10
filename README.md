# PAPAY

Catálogo premium de papas peruanas con selector por kilos, carrito persistente y pedidos por WhatsApp.

## Tecnología

React, TypeScript y Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

En Windows PowerShell, si la política de scripts bloquea `npm`, usa `npm.cmd run dev`.

## Compilación de producción

```bash
npm run build
```

## Configuración

Los productos y precios están centralizados en `src/data/products.ts`. El número público de WhatsApp está en `src/config/site.ts`. No se requieren variables de entorno para esta versión.

## Despliegue en Vercel

Importa el repositorio en Vercel. Detectará Vite automáticamente y ejecutará `npm run build`; el directorio de salida es `dist`.
