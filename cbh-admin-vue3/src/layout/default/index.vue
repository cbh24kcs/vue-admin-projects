<script setup lang="ts">
import Sidebar from "../component/sidebar.vue"
import NavBar from "../component/navbar.vue"



</script>

<template>
  <t-layout class="layout-body">
    <t-header class="layout__header">
      <NavBar />
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
      padding: 25px;

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
