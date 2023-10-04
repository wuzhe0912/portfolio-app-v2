import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Get the directory name in ESM
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
