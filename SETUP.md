# Guía de Configuración - CMDP Web

## Paso 1: Crear Proyecto en Supabase

1. Ve a https://supabase.com y regístrate
2. Crea un nuevo proyecto
3. Espera a que se inicialice (puede tomar unos minutos)
4. Ve a **Settings** → **API**

## Paso 2: Obtener Credenciales de Supabase

En la página de API de Supabase, copia:

- **Project URL** → Usa como `NEXT_PUBLIC_SUPABASE_URL`
- **anon public** → Usa como `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role secret** → Usa como `SUPABASE_SERVICE_ROLE_KEY`

## Paso 3: Configurar Variables de Entorno Locales

1. Abre `.env.local` en la raíz del proyecto
2. Completa los valores con tus credenciales de Supabase
3. Guarda el archivo

**Importante:** Nunca hagas commit de `.env.local` a git. Ya está incluido en `.gitignore`.

## Paso 4: Crear Base de Datos en Supabase (Opcional)

Para agregar funcionalidades adicionales con base de datos:

1. En Supabase, ve a **SQL Editor**
2. Copia este script para crear una tabla de ejemplo:

```sql
CREATE TABLE posts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create their own posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view all posts"
  ON posts FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own posts"
  ON posts FOR UPDATE
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own posts"
  ON posts FOR DELETE
  USING (auth.uid() = user_id);
```

3. Ejecuta el script

## Paso 5: Ejecutar la Aplicación

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## Paso 6: Probar Autenticación

1. Ve a http://localhost:3000/signup
2. Crea una nueva cuenta
3. Deberías ser redirigido a /signin
4. Inicia sesión con tus credenciales
5. Deberías ver el dashboard

## Paso 7: Deployment en Vercel

1. Sube tu código a GitHub
2. Ve a https://vercel.com y conéctate con tu cuenta de GitHub
3. Selecciona "Import Project"
4. Selecciona tu repositorio
5. En "Environment Variables", agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_API_URL` (URL de tu deploy en Vercel)
6. Haz click en "Deploy"

Vercel automáticamente desplegará tu aplicación y la actualizará con cada push a main.

## Troubleshooting

### Error: "Supabase credentials not found"
- Verifica que `.env.local` existe en la raíz del proyecto
- Asegúrate de que las variables tienen los valores correctos
- Reinicia el servidor de desarrollo: Ctrl+C y `npm run dev`

### Error: "Failed to sign up"
- Verifica que el proyecto de Supabase está activo
- Verifica que las credenciales son correctas
- Revisa la consola del navegador para más detalles

### El dashboard muestra "Loading..." indefinidamente
- Verifica que estás autenticado
- Revisa la consola del navegador para errores
- Verifica las credenciales de Supabase en `.env.local`

## Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Supabase](https://supabase.com/docs)
- [Documentación Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Soporte

Para más ayuda:
- Revisa los logs de error en la consola del navegador
- Verifica que Node.js versión 18+ está instalado: `node -v`
- Intenta limpiar node_modules y reinstalar: `rm -rf node_modules && npm install`
