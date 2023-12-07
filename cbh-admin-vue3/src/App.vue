<script setup lang="tsx">
import type { MessageConfig } from "tdesign-vue-next"

//全局特性配置
const globalConfig = {
  // message: {
  //   style: {
  //     width: "700px",
  //     height: "80px"
  //   }
  // },
}



</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <router-view></router-view>
  </t-config-provider>
</template>

<style scoped></style>
