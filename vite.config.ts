import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [reactPlugin(), tsconfigPathsPlugin()],
  server: {
    port: 3000,
  },
});
