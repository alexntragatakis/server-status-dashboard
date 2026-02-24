CREATE TYPE server_status AS ENUM ('ok', 'warning', 'critical');

CREATE TABLE metrics (
    id              INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    checked_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status          server_status NOT NULL,
    cpu_percent     NUMERIC(5, 2),
    memory_percent  NUMERIC(5, 2),
    uptime_seconds  BIGINT
);
