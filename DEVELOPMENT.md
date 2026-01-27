# Development Guide - CMDP Web

## 🏗️ Arquitectura del Proyecto

```
FRONT-END (Next.js + React)
    ↓
API Routes (Node.js)
    ↓
Supabase (PostgreSQL + Auth)
```

## 📂 Ubicación de Archivos

### Páginas (src/app/)
- `page.tsx` - Página de inicio
- `signin/page.tsx` - Inicio de sesión
- `signup/page.tsx` - Registro
- `dashboard/page.tsx` - Panel protegido
- `layout.tsx` - Layout principal

### APIs (src/app/api/auth/)
- `signin/route.ts` - Endpoint de login
- `signup/route.ts` - Endpoint de registro
- `signout/route.ts` - Endpoint de logout

### Utilidades (src/lib/)
- `supabase.ts` - Cliente de Supabase

### Hooks (src/hooks/)
- `useAuth.ts` - Hook de autenticación

## 🔄 Flujo de Autenticación

```
Usuario visita /signup
           ↓
Completa formulario
           ↓
POST /api/auth/signup
           ↓
Supabase crea usuario
           ↓
Redirige a /signin
           ↓
Usuario inicia sesión
           ↓
POST /api/auth/signin
           ↓
Supabase valida
           ↓
Redirige a /dashboard
           ↓
useAuth() obtiene sesión
           ↓
Dashboard renderiza contenido
```

## 🛠️ Agregar una Nueva Página

### 1. Crear archivo de página

```typescript
// src/app/mi-pagina/page.tsx
'use client'

import { useAuth } from '@/hooks/useAuth'

export default function MiPagina() {
  const { user, loading } = useAuth()

  if (loading) return <div>Cargando...</div>
  
  return (
    <div>
      <h1>Bienvenido, {user?.email}</h1>
      {/* Tu contenido aquí */}
    </div>
  )
}
```

### 2. La página es automáticamente accesible en:
```
http://localhost:3000/mi-pagina
```

## 🔌 Agregar un Nuevo API Endpoint

### 1. Crear ruta API

```typescript
// src/app/api/mi-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    // Tu lógica aquí
    const { data, error } = await supabase
      .from('mi_tabla')
      .select('*')
      .limit(10)

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener datos' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const { data, error } = await supabase
      .from('mi_tabla')
      .insert([body])

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear registro' },
      { status: 500 }
    )
  }
}
```

### 2. El endpoint es accesible en:
```
GET  http://localhost:3000/api/mi-endpoint
POST http://localhost:3000/api/mi-endpoint
```

## 🗄️ Trabajar con Supabase

### Crear tabla en Supabase

1. Ve a Supabase Dashboard
2. SQL Editor → New Query
3. Copia este SQL:

```sql
CREATE TABLE mi_tabla (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE mi_tabla ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad
CREATE POLICY "Users can see their own data"
  ON mi_tabla FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own data"
  ON mi_tabla FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### Leer datos desde el cliente

```typescript
import { supabase } from '@/lib/supabase'

// Obtener datos
const { data, error } = await supabase
  .from('mi_tabla')
  .select('*')
  .eq('user_id', user.id)
```

## 🎨 Agregar Estilos

El proyecto usa Tailwind CSS. Algunos ejemplos:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 bg-blue-50 rounded-lg">
    <h2 className="text-lg font-bold">Título</h2>
    <p className="text-gray-600">Descripción</p>
  </div>
</div>
```

Clases útiles:
- `p-4` - Padding
- `m-4` - Margen
- `bg-blue-50` - Fondo
- `text-lg font-bold` - Tipografía
- `rounded-lg` - Esquinas redondeadas
- `grid grid-cols-2` - Grid de 2 columnas
- `md:` - Responsive (tablet+)
- `lg:` - Responsive (desktop+)

## 🐛 Debugging

### 1. Consola del Navegador
```javascript
// Abre DevTools (F12)
// Verifica errores en Console
```

### 2. Console Logs
```typescript
console.log('Mi variable:', miVariable)
console.error('Error:', error)
```

### 3. VS Code Debugger
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

## 📦 Instalar Nuevas Dependencias

```bash
# Instalar paquete
npm install mi-paquete

# Con versión específica
npm install mi-paquete@1.2.3

# Guardar como dev dependency
npm install --save-dev mi-paquete

# Ver dependencias instaladas
npm list
```

## 🚀 Build y Deploy Local

```bash
# Build para producción
npm run build

# Servir build local
npm start

# Limpiar archivos anteriores
rm -rf .next node_modules

# Reinstalar
npm install
npm run build
```

## 📝 Convenciones de Código

### Nombres de componentes
- PascalCase: `MyComponent.tsx`

### Nombres de archivos
- kebab-case para páginas: `my-page/page.tsx`
- camelCase para funciones: `myFunction.ts`

### Estructura de carpetas
```
src/
├── app/             # Rutas y páginas
├── lib/             # Utilidades
├── hooks/           # Hooks personalizados
├── components/      # Componentes reutilizables (agregar)
├── types/           # Tipos TypeScript (agregar)
└── styles/          # Estilos globales
```

## 🧪 Testing (Opcional)

Para agregar testing:

```bash
npm install --save-dev jest @testing-library/react
```

Ejemplo de test:

```typescript
// src/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react'
import MyComponent from '@/app/my-page/page'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
})
```

## 🔐 Variables de Entorno

### Variables Públicas (se envían al cliente)
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_API_URL
```

### Variables Privadas (solo servidor)
```
SUPABASE_SERVICE_ROLE_KEY
```

## 📊 Monitoreo de Performance

Herramientas útiles:
- Chrome DevTools → Lighthouse
- WebPageTest: https://www.webpagetest.org/
- Vercel Analytics (después de deploy)

## 🤝 Git Workflow

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit
git commit -m "Agregar nueva feature"

# Push
git push origin main

# Ver commits
git log --oneline -10
```

## 🚨 Errores Comunes

### Error: "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### Error: "Supabase credentials not found"
- Verifica que `.env.local` existe
- Reinicia: `npm run dev`

### Error: "CORS error"
- Verifica Supabase settings
- Agrega tu dominio a CORS allowed list

## 💡 Tips de Desarrollo

1. **Usa el DevTools de Next.js**: Presiona Ctrl+Shift+H
2. **Fast Refresh**: Los cambios se reflejan automáticamente
3. **Type Safety**: Usa TypeScript para evitar errores
4. **Validación**: Valida datos tanto en cliente como en servidor
5. **Testing Manual**: Prueba en navegadores diferentes

## 🎓 Recursos de Aprendizaje

- [Next.js Learn](https://nextjs.org/learn)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Tailwind CSS Tips](https://tailwindcss.com/docs/installation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**¡Éxito con tu desarrollo!** Si tienes dudas, consulta la documentación oficial.
