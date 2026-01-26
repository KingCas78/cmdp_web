import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Log para debugging
if (typeof window === 'undefined') {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('[Supabase] Variables de entorno no disponibles:', {
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
