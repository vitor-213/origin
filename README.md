# Minisúper POS

Sistema de punto de venta (POS) para un minisúper. Gestión de productos, ventas y caja.

## Stack

- **Backend:** Node.js + Express + Mongoose (MongoDB)
- **Frontend:** React + Vite + Tailwind CSS
- **Auth:** JWT + bcryptjs
- **Estado global:** Context API (o Zustand si crece)

## Estructura

```
/
├── server/src/
│   ├── config/        # conexión DB, validación de env
│   ├── models/        # esquemas Mongoose
│   ├── controllers/   # lógica de request/response
│   ├── routes/        # definición de endpoints
│   ├── middlewares/   # auth, errores, validación
│   ├── services/      # lógica de negocio compleja
│   └── utils/         # helpers (ApiError, asyncHandler)
└── client/src/
    ├── api/           # cliente axios y llamadas HTTP
    ├── components/    # componentes reutilizables
    ├── features/      # módulos por dominio
    ├── hooks/         # custom hooks
    ├── context/       # AuthContext, CartContext, etc.
    ├── pages/         # vistas completas
    ├── routes/        # configuración de react-router
    └── utils/         # formateo, helpers
```

## Cómo levantar el proyecto

_(Pendiente — se completará cuando existan los `package.json`.)_

### Backend

```bash
cd server
npm install
cp ../.env.example .env
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```