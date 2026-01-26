import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function VideosPage() {
  const { data: videos } = await supabase
    .from('vimeo_videos')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {videos?.map(video => (
        <div key={video.id} className="rounded shadow">
          <img src={video.thumbnail} alt={video.title} />
          <h2 className="font-semibold mt-2">{video.title}</h2>
          <iframe
            src={video.embed_url}
            title={video.title}
            className="w-full aspect-video mt-2"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      ))}
    </main>
  );
}
