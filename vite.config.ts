import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ _, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '^/api': {
          target: env.VITE_APP_HOST_API,
          changeOrigin: true,
          logLevel: 'debug',
          rewrite: (path) => {
            return path.replace(/^\/api/, '/');
          },
        },
      },
    },
    envDir: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
