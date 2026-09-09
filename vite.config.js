import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? assetInfo.names?.[0] ?? '';
          return name.endsWith('.css')
            ? '[name]-[hash][extname]'
            : 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
