/// <reference types="vitest" />
import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, './src/_bootstrap'),
      '@common': path.resolve(__dirname, './src/_common'),
      '@core': path.resolve(__dirname, './src/_core'),
      '@locale': path.resolve(__dirname, './src/_locale'),
      '@network': path.resolve(__dirname, './src/_network'),
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
});
