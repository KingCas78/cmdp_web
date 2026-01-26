import { supabaseServer } from '@/lib/supabase-server'

const VIMEO_API = 'https://api.vimeo.com'

async function getAllVideos(folderId: string) {
  let all: any[] = []

  // Intento 1: Usar endpoint de folders
  let endpoint = `/me/folders/${folderId}/videos?per_page=100`

  console.log('Intentando obtener videos con endpoint:', endpoint)

  let next = endpoint
  let fallbackAttempted = false

  while (next) {
    const res = await fetch(`${VIMEO_API}${next}`, {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
        Accept: 'application/vnd.vimeo.*+json;version=3.4'
      }
    })

    const json = await res.json()
    console.log('Status:', res.status)
    console.log('Respuesta Vimeo:', JSON.stringify(json, null, 2).slice(0, 500))

    if (!res.ok) {
      console.error('Error Vimeo API:', json)
      // Si falla, no reintentar con cuenta completa, sino fallar explícitamente
      if (!fallbackAttempted) {
        fallbackAttempted = true
        // Intento 2: Usar /me/projects/{folderId}
        console.log('Reintentando con endpoint de projects...')
        endpoint = `/me/projects/${folderId}/videos?per_page=100`
        next = endpoint
        continue
      }
      throw new Error(
        `No se pudo acceder a la carpeta. Error: ${json.error || json.message || 'Unknown error'}. 
         Asegúrate de que: 
         1. El VIMEO_FOLDER_ID (${folderId}) es correcto
         2. El token tiene permisos para acceder a esta carpeta privada`
      )
    }

    if (json.data && Array.isArray(json.data)) {
      all = all.concat(json.data)
    }
    next = json.paging?.next ?? null
  }

  return all
}

export async function POST() {
  try {
    const folderId = process.env.VIMEO_FOLDER_ID!;
    
    if (!folderId) {
      return Response.json({ 
        error: 'VIMEO_FOLDER_ID no está configurado',
        message: 'Configura VIMEO_FOLDER_ID en .env.local con el ID correcto del proyecto'
      }, { status: 400 });
    }

    // Respuesta de desarrollo mientras se valida el token
    console.log('Sincronización de Vimeo iniciada con carpeta:', folderId);
    
    const videos = await getAllVideos(folderId);

    console.log('Videos obtenidos:', videos.length);

    if (videos.length === 0) {
      return Response.json({ 
        message: 'Sin videos para sincronizar',
        synced: 0
      });
    }

    const formatted = videos
      .filter(v => v && v.uri && v.name)
      .map(v => ({
        id: v.uri.split('/').pop() || v.id,
        title: v.name,
        description: v.description || null,
        thumbnail: v.pictures?.sizes?.[3]?.link ?? null,
        duration: v.duration || 0,
        embed_url: v.player_embed_url || null
      }));

    console.log('Videos formateados:', formatted.length);

    if (formatted.length === 0) {
      return Response.json({ 
        message: 'No videos válidos encontrados',
        synced: 0
      });
    }

    const { error } = await supabaseServer
      .from('vimeo_videos')
      .upsert(formatted, { onConflict: 'id' });

    if (error) {
      console.error('Error Supabase:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ 
      synced: formatted.length,
      message: `${formatted.length} videos sincronizados correctamente`
    });
  } catch (err) {
    console.error('Error en sincronización:', err);
    return Response.json({ 
      error: err instanceof Error ? err.message : 'Error desconocido',
      tip: 'Verifica que VIMEO_ACCESS_TOKEN tenga permisos "private" y que VIMEO_FOLDER_ID sea correcto'
    }, { status: 500 });
  }
}
