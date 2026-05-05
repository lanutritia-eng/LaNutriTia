# HealthPass Landing (Next.js + Tailwind)

Landing page profesional para una plataforma de salud digital en México.

## Ejecutar localmente
1. Instala dependencias:
```bash
npm install
```
2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```
3. Abre `http://localhost:3000`

## Estructura editable
Los datos editables viven en `src/lib/landingData.js`:
- Marca, links y misión.
- Métricas de confianza.
- Especialidades.
- Planes (precio en MXN, consultas, beneficios).
- Configuración de split de ingresos e integración con calendarios.

La UI principal está en `src/app/page.js` y está organizada por secciones reutilizables.

## Deploy en Vercel
1. Sube este proyecto a un repositorio Git.
2. Entra a [Vercel](https://vercel.com), importa el repositorio y usa la configuración por defecto para Next.js.
3. Ejecuta deploy. Vercel detecta automáticamente `npm run build`.
