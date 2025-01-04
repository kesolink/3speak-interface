import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.mkv', '**/*.JPG'],

// })

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mkv', '**/*.JPG'],
  css: {
    preprocessorOptions: {
      scss: {
        // You can include global SCSS variables/mixins here if needed.
        // For example: additionalData: `@import "./src/styles/variables.scss";`
      },
    },
    devSourcemap: true, // Enable source maps in development mode
  },
  build: {
    sourcemap: true, // Enable source maps in production builds
  },
});




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.mkv', '**/*.JPG'],
//   optimizeDeps: {
//     include: ['@hiveio/hive-js'],
//   },
//   resolve: {
//     alias: {
//       '@hiveio/hive-js': path.resolve(__dirname, 'node_modules/@hiveio/hive-js/dist/hivejs.min.js'),
//     },
//   },
//   define: {
//     global: 'window',
//   },
// });
