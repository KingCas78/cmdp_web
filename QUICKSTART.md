# Quick Start - CMDP Web

Guía rápida para comenzar con el proyecto.

## ⚡ Inicio Rápido (5 minutos)

### 1. Configuración Inicial

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
```

### 2. Configurar Supabase

1. Abre https://supabase.com
2. Crea un nuevo proyecto (toma 1-2 minutos)
3. Ve a **Settings** → **API**
4. Copia estas credenciales en `.env.local`:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

### 4. Probar la Aplicación

- **Crear cuenta**: Haz clic en "Sign Up"
- **Iniciar sesión**: Usa tus credenciales
- **Ver dashboard**: Deberías ver tu email en el dashboard

## 📁 Estructura Principal

```
src/
├── app/
│   ├── page.tsx           # Página inicio
│   ├── signin/page.tsx    # Login
│   ├── signup/page.tsx    # Registro
│   ├── dashboard/         # Área protegida
│   └── api/auth/          # Endpoints de autenticación
├── lib/
│   └── supabase.ts        # Configuración Supabase
└── hooks/
    └── useAuth.ts         # Hook de autenticación
```

## 🔧 Comandos Útiles

```bash
npm run dev       # Servidor de desarrollo (puerto 3000)
npm run build     # Compilar para producción
npm run lint      # Ejecutar linter
npm start         # Servidor de producción
```

## 🚀 Desplegar en Vercel

### Opción 1: Automática (Recomendado)

1. Sube tu código a GitHub
2. Ve a https://vercel.com
3. Haz clic en "Import Project"
4. Selecciona tu repositorio
5. Agrega variables de entorno
6. Haz clic en "Deploy"

### Opción 2: CLI de Vercel

```bash
npm i -g vercel
vercel login
vercel
```

## 📝 Variables de Entorno (.env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx

# Solo servidor (no se expone al navegador)
SUPABASE_SERVICE_ROLE_KEY=xxxxx

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🆘 Problemas Comunes

### Error: "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### Error: "NEXT_PUBLIC_SUPABASE_URL is undefined"
- Verifica que `.env.local` existe
- Verifica que tiene las credenciales correctas
- Reinicia: `Ctrl+C` y luego `npm run dev`

### Puerto 3000 ya en uso
```bash
npm run dev -- -p 3001
```

## 📚 Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 🎯 Próximos Pasos

1. **Personaliza el diseño** - Edita `src/app/page.tsx`
2. **Agrega base de datos** - Crea tablas en Supabase
3. **Crea API endpoints** - Agrega rutas en `src/app/api/`
4. **Despliega** - Sube a Vercel

## 💡 Tips

- Mantén `.env.local` privado (no hacer commit a git)
- Usa `NEXT_PUBLIC_` solo para variables públicas
- Las variables sin prefijo `NEXT_PUBLIC_` son privadas del servidor
- Reinicia el servidor después de cambiar `.env.local`

---

¿Dudas? Consulta [SETUP.md](./SETUP.md) para una guía más detallada.
