import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mime from 'mime';

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    fs: {
      strict: false,
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.pdf')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  resolve: {
    alias: {
      'mime-types': mime,
    }
  }
});
