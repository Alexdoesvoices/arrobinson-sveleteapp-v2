module.exports = {
  apps: [{
    name: 'adv-sv-app',
    script: 'build/index.js',
    // Options to prevent 30-minute hangs/crashes
    // max_memory_restart: '500M',
    watch: false,
    autorestart: true,
    restart_delay: 2000, // Wait 2s before restarting if it crashes
    env: {
      NODE_ENV: 'production',
      PORT: 7085,
      // SvelteKit requires the ORIGIN to match the public URL
      ORIGIN: 'https://alexdoesvoices.com',
      // Prevents the internal node server from idling out
      IDLE_TIMEOUT: 0,
      KEEP_ALIVE_TIMEOUT: 60,
      // Headers for Caddy to pass through correctly
      ADDRESS_HEADER: 'x-forwarded-for',
      PROTOCOL_HEADER: 'x-forwarded-proto',
      HOST_HEADER: 'host'
    }
  }]
}