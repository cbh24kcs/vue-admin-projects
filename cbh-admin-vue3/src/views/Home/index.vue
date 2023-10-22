<script setup lang="ts">

let x = $ref(0)

function add() {
  x++
}

</script>

<template>
  <button @click="add">x+1</button>
  <h1>x = {{ x }}</h1>
</template>


