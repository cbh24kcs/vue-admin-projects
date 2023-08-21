import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import path from 'path';
import VueMacros from 'unplugin-vue-macros/vite';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    VueJsx(),
    // Vue macros
    // VueMacros({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: VueJsx(), // 如果需要
    //   },
    // }),
    // ReactivityTransform(),
    AutoImport({
      imports: [
        'vue', // 导入内置的所有api
        'vue-router',
        'pinia',
      ],
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Unocss({
      presets: [presetUno()],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://cbh24kcs.w1.luyouxia.net',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, ''),
      },
      '/by-api': {
        target: 'http://wbytts.w1.luyouxia.net',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/by-api/, ''),
      },
    },
  },
});
