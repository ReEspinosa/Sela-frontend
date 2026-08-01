# Qué cambié en Sela-frontend

## Resumen
Reescribí el texto y la estructura de todas las páginas para que coincidan con el plan que
armamos (chatbot, Fe de Jesús, buscador de iglesias, lecciones + formulario, blog, biblioteca
digital). Mantuve los nombres de archivo originales donde fue posible para minimizar el diff,
aunque el contenido interno cambió por completo en varios casos.

## Archivos nuevos

**Datos**
- `src/app/data/faithContent.ts` — artículos y videos de Fe de Jesús
- `src/app/data/lessons.ts` — las 22 lecciones (se usan en Services y en el formulario)
- `src/app/data/churches.ts` — iglesias de ejemplo para el buscador
- `src/app/data/blogPosts.ts` — reescrito con contenido adventista y flags `featured`/`trending`

**Contexto y componentes**
- `src/app/context/ChatbotContext.tsx` — abre/cierra el chat desde cualquier botón
- `src/app/components/ChatbotWidget.tsx` — el widget del Asistente Bíblico (conecta a tu backend)
- `src/app/components/ChurchFinder.tsx` — buscador reutilizable (Home y About)
- `src/app/components/VerseOfDay.tsx` — versículo del día con botón al chatbot
- `src/app/components/ArticleCard.tsx` — tarjeta de artículo (reemplaza ProjectCard)
- `src/app/components/VideoCard.tsx` — tarjeta de video con reproductor modal simple
- `src/app/components/BibleStudyForm.tsx` — formulario de estudio bíblico con confirmación

## Archivos reescritos (mismo nombre, contenido nuevo)
- `Hero.tsx` — el botón ahora abre el chatbot en vez de ir a /work
- `FeaturedProjects.tsx` — ahora muestra artículos destacados de Fe de Jesús
- `CallToAction.tsx` — "Let's Create Something Amazing" ahora es el buscador de iglesias
- `WorkPage.tsx` — pestañas Artículos / Videos, basado en Apocalipsis 14:12
- `ProjectDetailPage.tsx` — ahora es el detalle de un artículo (ruta /work/:id)
- `AboutPage.tsx` — qué es la Iglesia Adventista + buscador de iglesias
- `ServicesPage.tsx` — las 22 lecciones en acordeón + formulario de estudio bíblico
- `BlogPage.tsx` — agrega secciones de Más leídos y En tendencia
- `BlogPostPage.tsx` — solo textos y fecha traducidos, estructura igual
- `ContactPage.tsx` — biblioteca digital (Biblia + libros de Elena G. de White) + formulario
- `NotFoundPage.tsx` — textos traducidos
- `Navigation.tsx` / `Footer.tsx` — navegación en español, marca "Selá", botón del chatbot
- `App.tsx` — envuelto en `ChatbotProvider`, monta `ChatbotWidget`
- `index.html` — `lang="es"`, título actualizado

## Archivos eliminados
- `data/projects.ts` y `components/ProjectCard.tsx` — eran el catálogo de proyectos del
  template original (arquitectura, UI/UX, branding), ya no se usan en ningún lado.

## Lo que falta conectar (todo tiene comentarios `// CAMBIA` en el código)
1. **Chatbot real**: `ChatbotWidget.tsx` llama a `VITE_BACKEND_URL + /api/chat`. Copia el
   `.env.example` como `.env` y apunta a tu backend (el que armamos con la ruta de DeepSeek).
2. **Buscador de iglesias**: por ahora filtra sobre `data/churches.ts` en el navegador. Cuando
   tengas una API real de iglesias, reemplaza el filtro en `ChurchFinder.tsx`.
3. **Formulario de estudio bíblico** (`BibleStudyForm.tsx`) y **formulario de contacto**
   (`ContactPage.tsx`): ambos hacen `console.log` en vez de enviar a un servidor. Conecta ahí tu
   backend o servicio de correo.
4. **Biblioteca digital** (`ContactPage.tsx`): los enlaces de descarga están en `#`. Reemplázalos
   por las URLs reales de tus PDFs cuando los subas.
5. **Videos de Fe de Jesús** (`data/faithContent.ts`): cada video tiene un campo `embedUrl`
   opcional. Si lo dejas vacío, la tarjeta muestra "Este video estará disponible pronto"; agrega
   la URL de embed de YouTube/Vimeo cuando tengas el video real.

## Nota sobre package.json
Intenté instalar dependencias para compilar y verificar el proyecto, pero el `package.json`
tiene un formato pensado para pnpm (claves duplicadas tipo `"paquete@version"`) que `npm install`
rechaza. No lo toqué porque no me lo pediste, pero si vas a usar npm en vez de pnpm probablemente
necesites limpiar esas claves duplicadas.
