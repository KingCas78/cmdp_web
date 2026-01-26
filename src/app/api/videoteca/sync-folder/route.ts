import { supabaseServer } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

const VIMEO_API = 'https://api.vimeo.com'

async function getVideosFromFolder(folderId: string) {
  let all: any[] = []

  // Intentar obtener videos de la carpeta
  let endpoint = `/me/folders/${folderId}/videos?per_page=100`

  console.log('Obteniendo videos de la carpeta:', folderId)

  let next = endpoint

  while (next) {
    const res = await fetch(`${VIMEO_API}${next}`, {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
        Accept: 'application/vnd.vimeo.*+json;version=3.4'
      }
    })

    const json = await res.json()

    if (!res.ok) {
      console.error('Error Vimeo API:', json)
      throw new Error(
        `No se pudo acceder a la carpeta ${folderId}. 
        El token de Vimeo necesita permisos de lectura para carpetas privadas.
        Error: ${json.error || 'Unknown error'}`
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
    const folderId = process.env.VIMEO_FOLDER_ID!

    if (!folderId) {
      return Response.json(
        {
          error: 'VIMEO_FOLDER_ID no está configurado en .env.local'
        },
        { status: 400 }
      )
    }

    console.log('Sincronizando videos de la carpeta de Vimeo:', folderId)

    // Obtener videos de la carpeta de Vimeo
    const videos = await getVideosFromFolder(folderId)

    console.log(`Se obtuvieron ${videos.length} videos de la carpeta`)

    // Transformar al formato correcto
    const formatted = videos.map(v => ({
      id: v.uri.split('/').pop() || v.id,
      title: v.name,
      description: v.description || null,
      thumbnail: v.pictures?.sizes?.[3]?.link ?? null,
      duration: v.duration || 0,
      embed_url: v.player_embed_url || null,
      vimeo_id: v.uri.split('/').pop() || v.id
    }))

    // Insertar en videoteca_videos
    if (!supabaseServer) {
      return Response.json(
        { error: 'Database not available' },
        { status: 503 }
      );
    }

    const { error } = await supabaseServer
      .from('videoteca_videos')
      .upsert(formatted, { onConflict: 'id' })

    if (error) {
      console.error('Error Supabase:', error)
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({
      success: true,
      synced: formatted.length,
      message: `${formatted.length} videos sincronizados correctamente a la videoteca`
    })
  } catch (err) {
    console.error('Error en sincronización:', err)
    const message = err instanceof Error ? err.message : 'Error desconocido'
    return Response.json(
      {
        error: message,
        tip: 'Asegúrate de que VIMEO_ACCESS_TOKEN tenga permisos "private" y que VIMEO_FOLDER_ID sea correcto'
      },
      { status: 500 }
    )
  }
}
