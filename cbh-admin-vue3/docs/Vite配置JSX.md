
安裝插件：
npm i @vitejs/plugin-vue-jsx -D

修改配置：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
  ],
})

```
