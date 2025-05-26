import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://eanselmi060.github.io/projectunegia/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
