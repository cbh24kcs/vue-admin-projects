import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import path from 'path';
import VueMacros from 'unplugin-vue-macros/vite';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// ! node v16+
// * node v16+
// ? node v16+
// // node v16+
//
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd())
  console.log(env)

  return {
    plugins: [
      VueDevTools(),
      // vue(),
      // vueJsx(),
      // Vue macros
      VueMacros({
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(), // 如果需要
        },
      }),
      // ReactivityTransform(),
      AutoImport({
        // 指定类型文件生成的位置
        dts: 'types/auto-imports.d.ts',
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
        // 指定类型文件生成的位置
        dts: 'types/components.d.ts',
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
        [env.VITE_BASE_API]: {
          target: env.VITE_SERVER,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/api/, ''),
        },
        // '/by-api': {
        //   target: 'http://wbytts.w1.luyouxia.net',
        //   changeOrigin: true,
        //   rewrite: p => p.replace(/^\/by-api/, ''),
        // },
      },
    },
  }

});
