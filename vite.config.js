import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  build: { minify: false },
  plugins: [vue(),
  vueJsx({
    transformOn: true,
    optimize: true,
    mergeProps: true,
    enableObjectSlots: true,
  }),]
})
