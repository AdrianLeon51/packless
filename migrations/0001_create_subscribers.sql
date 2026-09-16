CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'unknown',
  ip TEXT,
  user_agent TEXT,
  created_at INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers (email);
