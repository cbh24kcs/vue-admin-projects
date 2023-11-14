<script setup lang="ts">
import Sidebar from "../component/sidebar.vue"
const options = ref([])
const clickHandler = () => { }
</script>

<template>
  <t-layout class="layout-body">
    <t-header class="layout__header">
      <t-head-menu value="item1" height="120px">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <template #operations>
          <!-- <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a> -->
          <t-dropdown :options="options" trigger="click" @click="clickHandler">
            <t-space>
              <t-button variant="text">
                更多
                <template #suffix> <t-icon name="chevron-down" size="16" /></template>
              </t-button>
            </t-space>
          </t-dropdown>
        </template>
      </t-head-menu>
    </t-header>

    <t-layout>
      <t-aside>
        <Sidebar />
      </t-aside>

      <t-layout class="right">
        <t-layout class="main-content-wrapper">
          <t-content class="main-content" style="">
            <router-view></router-view>
          </t-content>
        </t-layout>
      </t-layout>
    </t-layout>

  </t-layout>
</template>

<style lang="scss" scoped>
.layout-body {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .right {
    .main-content-wrapper {
      padding: 10px;

      .main-content {
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
      }
    }
  }
}

.layout {
  &__header {
    border: 1px solid #ddd;
  }
}
</style>
