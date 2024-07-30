import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vike from 'vike/plugin';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vike({ prerender: true }),
    checker({ vueTsc: true }),
  ],
});
