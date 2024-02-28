import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'


export default defineConfig(({_, mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    envDir: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [react()],
  }
})
