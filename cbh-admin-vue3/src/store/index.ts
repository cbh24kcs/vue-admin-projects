import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();

// 定义一个默认存储
export const useDefaultStore = defineStore("default", {
  state: () => ({
    count: 1,
  }),
  getters: {},
  actions: {},
});
