import { supabaseServer } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

interface Video {
  id: string
  title: string
  description: string | null
  thumbnail: string | null
  duration: number
  embed_url: string | null
  created_at: string
}

export async function GET() {
  try {
    if (!supabaseServer) {
      return Response.json(
        { error: 'Database not available' },
        { status: 503 }
      )
    }

    const { data, error } = await supabaseServer
      .from('vimeo_videos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(500)

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return Response.json({ data: data || [] })
  } catch (err) {
    console.error('Error fetching videos:', err)
    return Response.json(
      { error: 'Error al obtener videos' },
      { status: 500 }
    )
  }
}
