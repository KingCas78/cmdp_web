export function VimeoCard({ video }: { video: any }) {
  return (
    <article className="rounded-lg overflow-hidden shadow">
      <img src={video.thumbnail} alt={video.title} />
      <div className="p-4">
        <h3 className="font-semibold">{video.title}</h3>
        <iframe
          src={video.embed_url}
          className="w-full aspect-video mt-2"
          allowFullScreen
          title={video.title}
        />
      </div>
    </article>
  );
}
