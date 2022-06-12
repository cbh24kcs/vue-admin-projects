<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <SideBarItem v-for="menu in menus" :key="menu.id" :item="menu" />
    </el-menu>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { SideBarItem },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getMenus"]),
  },
  computed: {
    ...mapState(["menus"]),
  },
  mounted() {
    this.getMenus();
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  background-color: #545c64;

  .el-menu {
    border-right: none;
  }
}
</style>