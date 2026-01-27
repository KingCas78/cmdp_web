-- Crear tabla vimeo_videos
CREATE TABLE IF NOT EXISTS vimeo_videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail TEXT,
  duration INTEGER,
  embed_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índice en title para búsquedas
CREATE INDEX IF NOT EXISTS idx_vimeo_videos_title ON vimeo_videos(title);

-- Crear política RLS para lectura pública
ALTER TABLE vimeo_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" 
  ON vimeo_videos 
  FOR SELECT 
  USING (TRUE);

CREATE POLICY "Service role full access"
  ON vimeo_videos
  USING (auth.role() = 'service_role');
