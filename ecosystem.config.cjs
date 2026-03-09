module.exports = {
  apps: [{
    name: 'adv-sv-app',
    // Point this to your absolute script path
    script: '/home/arobinson/dev/projects/arrobinson-svelteapp-v2/build/index.js',
    // This tells PM2 to use Bun instead of Node
    interpreter: 'bun', 
    env: {
      NODE_ENV: 'production',
      PORT: 7085,
      // Using 0.0.0.0 is safer for reboots than a specific local IP
      HOST: '0.0.0.0', 
      ORIGIN: 'https://alexdoesvoices.com',
      ADDRESS_HEADER: 'x-forwarded-for',
      PROTOCOL_HEADER: 'x-forwarded-proto'
    },
    // Gives the system time to initialize networking
    restart_delay: 5000 
  }]
}