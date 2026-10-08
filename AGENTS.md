cat > AGENTS.md << 'EOF'

# Convenciones del Proyecto — Minisúper POS

## Stack

- Backend: Node.js + Express + Mongoose (MongoDB)
- Frontend: React + Vite + Tailwind CSS
- Auth: JWT + bcryptjs
- Estado global: Context API (o Zustand si crece)

## Estructura de Carpetas

### Backend (/server/src)

- `config/` — conexión DB, validación de env
- `models/` — esquemas Mongoose
- `controllers/` — lógica de request/response
- `routes/` — definición de endpoints
- `middlewares/` — auth, errores, validación
- `services/` — lógica de negocio compleja (ej: ventas, caja)
- `utils/` — helpers (ApiError, asyncHandler)

### Frontend (/client/src)

- `api/` — cliente axios y llamadas HTTP
- `components/` — componentes reutilizables
- `features/` — módulos por dominio (products, sales, cash)
- `hooks/` — custom hooks
- `context/` — AuthContext, CartContext, etc.
- `pages/` — vistas completas
- `routes/` — configuración de react-router
- `utils/` — formateo, helpers

## Naming

- Archivos backend: `kebab-case` + sufijo de capa → `product.controller.js`, `auth.middleware.js`
- Archivos frontend componentes: `PascalCase.jsx` → `ProductCard.jsx`
- Archivos frontend features: `camelCase.js` → `useCart.js`
- Modelos Mongoose: `PascalCase` singular → `Product`, `Sale`, `User`
- Rutas API: `/api/v1/{recurso}` en plural → `/api/v1/products`

## Reglas de Código

- Siempre `async/await`, nunca callbacks
- Manejo de errores centralizado con `ApiError` y `asyncHandler`
- Validar variables de entorno al arrancar (fallar rápido)
- Respuestas API consistentes: `{ success, data, message }`
- Nunca exponer stack traces en producción
- Borrado lógico (`active: false`) en vez de borrado físico

## Git

- Ramas: `main` (estable), `develop` (integración), `feature/xxx`
- Commits: Conventional Commits → `feat:`, `fix:`, `chore:`, `docs:`
- NUNCA ejecutar `git commit` o `git push` automáticamente
- NUNCA commitear `.env` (solo `.env.example`)

## OpenCode

- SIEMPRE mostrar plan antes de escribir archivos
- NO generar tests a menos que se pida explícitamente
- NO instalar dependencias sin confirmación
  EOF
