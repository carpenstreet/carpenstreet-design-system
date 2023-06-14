import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@/styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@/pages', replacement: path.resolve(__dirname, 'src/pages') },
    ],
  },
  server: {
    port: 3001,
  },
});
