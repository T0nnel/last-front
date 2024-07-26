import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'dist', // Set this if your app is served from a subpath
  plugins: [react()],
});
