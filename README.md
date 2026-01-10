# CMDP Web - Full-Stack Application

Una aplicación web moderna construida con **Next.js**, **Supabase** y **Vercel**.

## ��� Stack Tecnológico

- **Frontend**: Next.js 14+ con React 18
- **Backend**: Node.js con Next.js API Routes
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Estilos**: Tailwind CSS
- **Deployment**: Vercel
- **Lenguaje**: TypeScript

## ��� Requisitos Previos

- Node.js 18.x o superior
- npm o yarn
- Una cuenta en [Supabase](https://supabase.com)
- Una cuenta en [Vercel](https://vercel.com)

## ��� Instalación

1. **Clonar el repositorio**

```bash
git clone <tu-repo>
cd cmdp_web
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## ��� Cómo obtener tus credenciales de Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea un nuevo proyecto
2. En la sección **Settings** → **API**, encontrarás:
   - `Project URL` (usa como `NEXT_PUBLIC_SUPABASE_URL`)
   - `anon public` (usa como `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - `service_role secret` (usa como `SUPABASE_SERVICE_ROLE_KEY`)

## �� Ejecutar la aplicación

**Modo desarrollo:**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

**Build para producción:**

```bash
npm run build
npm start
```

## ��� Estructura del Proyecto

```
cmdp_web/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── signin/
│   │   │       ├── signup/
│   │   │       └── signout/
│   │   ├── dashboard/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── hooks/
│   │   └── useAuth.ts
│   └── styles/
│       └── globals.css
├── public/
├── .env.example
├── .env.local
├── vercel.json
└── package.json
```

## ��� Características de Seguridad

- ✅ Autenticación con Supabase
- ✅ Variables de entorno protegidas
- ✅ Rutas protegidas en el dashboard
- ✅ API routes seguros del lado del servidor
- ✅ TypeScript para tipado estático

## ��� Rutas Disponibles

| Ruta | Descripción |
|------|------------|
| `/` | Página de inicio |
| `/signin` | Iniciar sesión |
| `/signup` | Crear cuenta |
| `/dashboard` | Panel de usuario (protegido) |
| `/api/auth/signin` | Endpoint API de login |
| `/api/auth/signup` | Endpoint API de registro |
| `/api/auth/signout` | Endpoint API de logout |

## ��� Deployment en Vercel

1. **Conectar repositorio a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Selecciona "Import Project"
   - Conecta tu repositorio de GitHub/GitLab

2. **Configurar variables de entorno**
   - En Vercel, ve a **Settings** → **Environment Variables**
   - Añade las siguientes variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `NEXT_PUBLIC_API_URL` (usar URL de producción)

3. **Deploy**
   - Vercel automáticamente construirá y desplegará en cada push a `main`

## ��� Scripts Disponibles

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm start            # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
```

## ��� Licencia

Este proyecto está bajo la Licencia MIT.

---

**Última actualización:** 10 de enero de 2026
