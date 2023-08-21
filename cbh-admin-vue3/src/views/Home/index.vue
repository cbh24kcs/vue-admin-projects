<script setup lang="ts">
import {set, get, keys, values, setMany, getMany} from 'idb-keyval'
const handleClick = () => {
  set('user', {name: '张三',age: 18})
}
</script>

<template>
  <h1>HOME</h1>
  <button @click="handleClick">存储</button>
</template>
