<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
let x = ref(1)

const handleClick = () => {
  x.value++
}

</script>

<template>
  <h1>HOME</h1>
  <button @click="handleClick">修改</button>
  <h1>x = {{ x }}</h1>
  <HelloWorld></HelloWorld>
</template>