import { createClient } from '@supabase/supabase-js';

// Intentar con ambas convenciones de nombres de variables
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Log para debugging
if (typeof window === 'undefined') {
  console.log('[Supabase Server] Debug:', {
    supabaseUrl: supabaseUrl || 'NOT SET',
    hasKey: !!supabaseServiceRoleKey,
    keyLength: supabaseServiceRoleKey?.length || 0,
    env: {
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    }
  });
  
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('[Supabase] Variables de entorno no disponibles:', {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseServiceRoleKey,
    });
  } else {
    console.log('[Supabase] Variables cargadas correctamente');
  }
}

export const supabaseServer = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;
