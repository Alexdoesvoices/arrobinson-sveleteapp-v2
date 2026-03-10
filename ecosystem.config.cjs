module.exports = {
  apps: [
    {
      name: 'adv-sv-app',
      script: 'bun',
      args: 'run /home/arobinson/dev/projects/arrobinson-sveleteapp-v2/build/index.js',
      cwd: '/home/arobinson/dev/projects/arrobinson-sveleteapp-v2',
      env: {
        NODE_ENV: 'production',
        PORT: 7085,
        HOST: '0.0.0.0', 
        ORIGIN: 'https://alexdoesvoices.com',
        ADDRESS_HEADER: 'x-forwarded-for',
        PROTOCOL_HEADER: 'x-forwarded-proto'
      },
      restart_delay: 5000,
      max_memory_restart: '500M'
    }
  ]
}