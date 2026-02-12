module.exports = {
  apps: [{
    name: 'adv-sv-app',
    script: 'build/index.js',
    env: {
      NODE_ENV: 'production',
      PORT: 7085,
      // Use your local IP here
      ORIGIN: 'http://192.168.68.82', 
      // These help SvelteKit handle the Caddy proxy correctly
      ADDRESS_HEADER: 'x-forwarded-for',
      PROTOCOL_HEADER: 'x-forwarded-proto'
    }
  }]
}
