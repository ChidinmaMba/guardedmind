import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distPath = join(root, 'dist')
const LOG_ENDPOINT = 'http://127.0.0.1:7500/ingest/eb2b1ec8-668c-486a-8cc0-f55c1f0ee891'
const SESSION_ID = 'd9f76b'

function debugLog(hypothesisId, message, data) {
  // #region agent log
  fetch(LOG_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': SESSION_ID },
    body: JSON.stringify({
      sessionId: SESSION_ID,
      runId: process.env.DEBUG_RUN_ID || 'pre-fix',
      hypothesisId,
      location: 'scripts/start.mjs',
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {})
  // #endregion
}

const port = Number(process.env.PORT) || 4173
const distExists = existsSync(distPath)
const npmLifecycle = process.env.npm_lifecycle_event || null

debugLog('A', 'start script invoked', {
  port,
  portEnv: process.env.PORT ?? null,
  distExists,
  npmLifecycle,
  cwd: process.cwd(),
  nodeEnv: process.env.NODE_ENV ?? null,
})

if (!distExists) {
  debugLog('D', 'dist folder missing — build may not have run', { distPath })
  console.error('Error: dist/ not found. Run npm run build first.')
  process.exit(1)
}

debugLog('B', 'spawning vite preview', { bindHost: '0.0.0.0', bindPort: port })

const child = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', String(port)], {
  cwd: root,
  stdio: ['inherit', 'pipe', 'pipe'],
  env: { ...process.env },
  shell: true,
})

child.stdout.on('data', (chunk) => {
  const text = chunk.toString()
  process.stdout.write(chunk)
  if (text.includes('Local:') || text.includes('Network:')) {
    debugLog('B', 'vite preview listening', { output: text.trim() })
  }
  if (text.includes('Blocked request')) {
    debugLog('F', 'host blocked by vite preview', { output: text.trim() })
  }
})

child.stderr.on('data', (chunk) => {
  const text = chunk.toString()
  process.stderr.write(chunk)
  debugLog('C', 'vite preview stderr', { output: text.trim() })
})

child.on('error', (err) => {
  debugLog('C', 'failed to spawn vite preview', { error: err.message })
  process.exit(1)
})

child.on('exit', (code) => {
  debugLog('A', 'vite preview exited', { code })
  process.exit(code ?? 1)
})
