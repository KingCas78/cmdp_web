-- Crear tabla para videos de la videoteca (carpeta específica)
CREATE TABLE IF NOT EXISTS videoteca_videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail TEXT,
  duration INTEGER,
  embed_url TEXT,
  vimeo_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índice en title para búsquedas
CREATE INDEX IF NOT EXISTS idx_videoteca_videos_title ON videoteca_videos(title);

-- Crear política RLS para lectura pública
ALTER TABLE videoteca_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" 
  ON videoteca_videos 
  FOR SELECT 
  USING (TRUE);

CREATE POLICY "Service role full access"
  ON videoteca_videos
  USING (auth.role() = 'service_role');
