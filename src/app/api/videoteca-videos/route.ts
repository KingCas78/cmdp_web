import { supabaseServer } from '@/lib/supabase-server'

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
    const { data, error } = await supabaseServer
      .from('videoteca_videos')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return Response.json({ data: data || [] })
  } catch (err) {
    console.error('Error fetching videoteca videos:', err)
    return Response.json(
      { error: 'Error al obtener videos' },
      { status: 500 }
    )
  }
}
