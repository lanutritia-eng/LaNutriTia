# La Nutri Tía – Sitio (Next.js + Tailwind)

## Desarrollo
1) Instala dependencias
```bash
npm install
```
2) Ejecuta en local
```bash
npm run dev
```
3) Abre http://localhost:3000

## Configuración rápida
Edita `src/lib/config.js` para cambiar:
- textos del hero, CTA y las 4 imágenes de la galería (`heroImages`)
- enlaces (Instagram, WhatsApp, Setmore, email)
- textos del hero y CTA
- enlaces (Instagram, TikTok, WhatsApp, Setmore, email)
- reseñas de Setmore (iframe público)
- planes y precios
- posts de Instagram a embeber (opcional)

### Imágenes del hero (hero 1, hero 2, hero 3 y hero 4)
1) Reemplaza los archivos en `public/hero/1.png`, `2.png`, `3.png` y `4.png` con tus ilustraciones o fotos (ideal 1200×736 px). Si usas otro formato, actualiza las extensiones en `src/lib/config.js`.
2) Si usas otros nombres o cantidades, actualiza el arreglo `hero.images` en `src/lib/config.js` para que apunten a las nuevas rutas.
3) Las imágenes se mostrarán en los carruseles del hero y del bloque "Acompañamiento realista".

## Setmore
Puedes usar el link directo (ya está). Si quieres el botón/widget oficial, pega el snippet que te da Setmore dentro de la sección "Agenda".

## Deploy en Vercel
Sube estos archivos a un repo y conéctalo en https://vercel.com/
