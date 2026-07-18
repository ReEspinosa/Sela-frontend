# Selá backend — Asistente Bíblico

Backend del Asistente Bíblico del sitio Selá. Expone un solo endpoint,
`POST /api/chat`, que recibe el historial de la conversación y lo reenvía a
la API de DeepSeek con un prompt que obliga a citar la Biblia y a Elena G.
de White en cada respuesta.

## Requisitos

- Node.js 18 o superior (usa `fetch` nativo, no necesitas instalar nada extra para eso)

## Cómo correrlo local (en IntelliJ)

1. Abre esta carpeta como proyecto en IntelliJ.
2. En una terminal dentro del proyecto:

```bash
npm install
cp .env.example .env
```

3. Abre `.env` y pon tu API key real de DeepSeek en `DEEPSEEK_API_KEY`.
4. Corre el servidor:

```bash
npm run dev
```

Debería mostrar `Servidor corriendo en http://localhost:3000`.

5. Pruébalo con curl para confirmar que responde:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"¿Por qué los adventistas guardan el sábado?"}]}'
```

## Cómo conectarlo con el frontend

En el frontend (Sela-frontend), el archivo `.env` debe apuntar aquí:

```
VITE_BACKEND_URL=http://localhost:3000
```

Cuando despliegues este backend (por ejemplo en Render), cambia esa variable
en el frontend a la URL pública de Render.

## Estructura

```
server.js         # arranca Express, monta cors, json y las rutas
routes/chat.js     # POST /api/chat — aquí vive el prompt del asistente
.env.example       # plantilla de variables de entorno
```

## Cosas que vas a querer ajustar (marcadas con "CAMBIA" en el código)

- **`routes/chat.js` → `SYSTEM_PROMPT`**: el "carácter" del asistente. Ya
  está configurado para responder en unos 5 párrafos, con al menos una cita
  bíblica textual y al menos una referencia a un libro de Elena G. de White
  en cada respuesta. Ajusta el tono o agrega más doctrinas aquí.
- **`routes/chat.js` → `max_tokens`**: súbelo si sientes que las respuestas
  se cortan antes de completar los 5 párrafos.
- **`server.js` → `cors()`**: en producción, restringe el origen a tu
  dominio real del frontend en vez de aceptar cualquiera.

## Desplegar en Render

1. Sube este repo a GitHub.
2. En Render, crea un nuevo "Web Service" apuntando a este repo.
3. Build command: `npm install`
4. Start command: `npm start`
5. Agrega la variable de entorno `DEEPSEEK_API_KEY` en la configuración del
   servicio en Render (no la subas en el código).
6. Cuando tengas la URL pública de Render, actualízala en el `.env` del
   frontend (`VITE_BACKEND_URL`).
