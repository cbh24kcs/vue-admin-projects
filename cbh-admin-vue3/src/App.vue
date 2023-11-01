<script setup lang="tsx">
import type { MessageConfig } from "tdesign-vue-next"
const globalConfig = {
  size: 'large',
  message: {
    style: {
      width: "700px",
      height: "50px"
    }
  },
}
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <router-view></router-view>
  </t-config-provider>
</template>

<style scoped></style>
