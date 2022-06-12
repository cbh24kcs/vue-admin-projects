<template>
  <div class="home">
    <div class="container">
      <div class="left">
        <SideBar />
      </div>
      <div class="right">
        <div class="top">
          <TopNav />
        </div>
        <div class="main">
          <AppMain />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import TopNav from "./TopNav.vue";
import AppMain from "./AppMain.vue";

export default {
  components: {
    SideBar,
    TopNav,
    AppMain,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  .container {
    width: 100%;
    div {
      box-sizing: border-box;
    }
    .left {
      width: 200px;
      height: 100vh;
      display: inline-block;
      vertical-align: top;
    }
    .right {
      width: calc(100vw - 200px);
      height: 100vh;
      display: inline-block;
      vertical-align: top;
      .top {
        height: 60px;
      }
      .main {
        height: calc(100vh - 60px);
        padding: 10px;
      }
    }
  }
}
</style>