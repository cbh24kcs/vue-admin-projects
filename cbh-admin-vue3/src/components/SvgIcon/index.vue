<template>
  <div></div>
</template>

<script setup lang="ts">

// defineProps({
//   icon: {
//     type: String,
//     default: ''
//   }
// })

interface Props {
  icon: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), { icon: '' })
</script>

<style scoped></style>
