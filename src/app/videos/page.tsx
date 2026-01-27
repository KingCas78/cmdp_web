'use client'

import { useEffect, useState } from 'react';

export const dynamic = 'force-dynamic'

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/videos');
        const data = await res.json();
        setVideos(data.data || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="p-6">Cargando videos...</div>;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {videos?.map(video => (
        <div key={video.id} className="rounded shadow">
          {video.thumbnail && <img src={video.thumbnail} alt={video.title} />}
          <h2 className="font-semibold mt-2">{video.title}</h2>
          {video.embed_url && (
            <iframe
              src={video.embed_url}
              title={video.title}
              className="w-full aspect-video mt-2"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </main>
  );
}
