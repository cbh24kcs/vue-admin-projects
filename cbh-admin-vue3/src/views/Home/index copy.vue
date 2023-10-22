<script setup lang="ts">

import { useDefaultStore } from '@/store/default';

// const defaultStore = useDefaultStore()
const { count } = storeToRefs(useDefaultStore())

const data = reactive({
  a: 1,
  b: 2
})

// const { a, b } = data;
const { a, b } = toRefs(data);

</script>

<template>
  {{ count }}
  <button @click="count++">count+1</button>
  <hr>
  a = {{ a }}
  b = {{ b }}
  <button @click="a++">a++</button>
</template>
