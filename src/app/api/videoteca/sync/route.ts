import { supabaseServer } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { videos } = body

    if (!videos || !Array.isArray(videos)) {
      return Response.json(
        { error: 'Se requiere un array de videos' },
        { status: 400 }
      )
    }

    // Transformar videos al formato correcto
    const formatted = videos.map((v: any) => ({
      id: v.id,
      title: v.title,
      description: v.description || null,
      thumbnail: v.thumbnail || null,
      duration: v.duration || 0,
      embed_url: v.embed_url || null,
      vimeo_id: v.vimeo_id || v.id
    }))

    // Insertar o actualizar videos en videoteca_videos
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
      message: `${formatted.length} videos agregados a la videoteca`
    })
  } catch (err) {
    console.error('Error:', err)
    return Response.json(
      { error: err instanceof Error ? err.message : 'Error desconocido' },
      { status: 500 }
    )
  }
}
