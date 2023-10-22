<script setup lang="ts">

const x = ref(null)

onMounted(() => {
  console.log(x.value)
})

</script>

<template>
  <h1 ref="x">你好</h1>
  <!-- <h1 :ref="(e: any) => x = e">你好</h1> -->
</template>


