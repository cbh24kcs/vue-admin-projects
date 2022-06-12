import Vue from "vue";
import Vuex from "vuex";
import { queryAllMenu } from "@/api/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [],
  },
  getters: {},
  mutations: {
    setMenus(state, val) {
      state.menus = val;
    },
  },
  actions: {
    async getMenus({ commit }) {
      let res = await queryAllMenu();
      let menus = res;
      menus = menus
        .map((item) => {
          item.children = menus.filter((m) => m.parent_id == item.id);
          return item;
        })
        .filter((x) => x.parent_id === null)
        .map((item) => {
          item.parent_id = "null";
          return item;
        });
      commit("setMenus", menus);
    },
  },
  modules: {},
});
