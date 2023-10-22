<script setup lang="ts">
import { useDemoStore } from '@/store/demo'
import { useX } from '@/hooks/useX'
const demoStore = useDemoStore()

// const { x, xx, addX } = useX()
import { defineStore } from "pinia";


function changeMany() {
  // demoStore.x++

  // 不是必须的，但是同时修改的东西很多的话，这个方法会给你优化下性能（其实也无所谓）
  // demoStore.$patch({
  //   x: demoStore.x + 1,
  // })

  demoStore.$patch(state => state.x++)

}
</script>

<template>
  <h1>x = {{ demoStore.x }}</h1>
  <h1>xx = {{ demoStore.xx }}</h1>
  <button @click="demoStore.addX">addX</button>
  <button @click="demoStore.x++">x++</button>
  <button @click="changeMany">改很多东西</button>
</template>

