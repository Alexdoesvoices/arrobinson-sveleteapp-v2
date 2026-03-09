module.exports = {
  apps: [{
    name: 'adv-sv-app',
    // Use the FULL path here
    script: 'build/index.js', 
    env: {
      NODE_ENV: 'production',
      PORT: 7085,
      // Change to your domain to avoid IP binding issues
      ORIGIN: 'https://alexdoesvoices.com', 
      HOST: '0.0.0.0', 
      ADDRESS_HEADER: 'x-forwarded-for',
      PROTOCOL_HEADER: 'x-forwarded-proto'
    },
    // This is the "Safety Net" for reboots
    restart_delay: 5000 
  }]
}