module.exports = {
  apps: [
    {
      name: 'adv-sv-app',
      // We use 'bun' as the primary command
      script: 'bun',
      // We use 'run' to execute the SvelteKit entry point
      args: 'run /home/arobinson/dev/projects/arrobinson-sveleteapp-v2/build/index.js',
      cwd: '/home/arobinson/dev/projects/arrobinson-sveleteapp-v2',
      env: {
        NODE_ENV: 'production',
        PORT: 7085,
        // Using 0.0.0.0 prevents the "IP not ready" reboot crash
        HOST: '0.0.0.0', 
        ORIGIN: 'https://alexdoesvoices.com',
        ADDRESS_HEADER: 'x-forwarded-for',
        PROTOCOL_HEADER: 'x-forwarded-proto'
      },
      // Safety delay to ensure the OS is ready after a reboot
      restart_delay: 5000,
      // Prevents Bun from using too much RAM and crashing the server
      max_memory_restart: '500M'
    }
  ]
}