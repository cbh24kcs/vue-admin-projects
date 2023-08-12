<template>
  <div>
    <el-submenu
      v-if="item.children && item.children.length != 0"
      :index="item.id + ''"
    >
      <template slot="title">{{ item.name }}</template>
      <SideBarItem v-for="menu in item.children" :key="menu.id" :item="menu" />
    </el-submenu>
    <el-menu-item v-else :index="item.id + ''">{{ item.name }}</el-menu-item>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>