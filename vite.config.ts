import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [tailwindcss(), sveltekit()],
    server: {
      port: parseInt(env.PORT) || 5173,
      strictPort: true,
    }
  };
});




// import tailwindcss from '@tailwindcss/vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({ plugins: [tailwindcss(), sveltekit()] });
