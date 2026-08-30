#!/bin/sh
# Kill anything already listening on 4321, then start a single Astro dev server.
PORT=4321
PIDS=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null || true)
if [ -n "$PIDS" ]; then
  echo "Stopping listeners on $PORT: $PIDS"
  kill $PIDS 2>/dev/null || true
  sleep 0.4
fi
cd "$(dirname "$0")/.."
exec npm run dev
