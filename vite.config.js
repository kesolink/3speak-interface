import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'stream', 'crypto', 'util'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      }
    })
  ],
  assetsInclude: ['**/*.mkv', '**/*.JPG'],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util',
    }
  },
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Your existing SCSS configuration
      },
    },
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});