<script setup lang="ts">
import SidebarItem from "./sidebarItem.vue"
</script>

<template>
  <t-menu theme="light" value="dashboard">
    <SidebarItem />
    <t-submenu title="用户管理">
      <t-menu-item value="1234">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        用户列表
      </t-menu-item>
      <t-menu-item value="123">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        权限列表
      </t-menu-item>
    </t-submenu>
  </t-menu>
</template>
