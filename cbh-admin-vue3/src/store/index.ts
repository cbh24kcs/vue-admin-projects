import { createPinia, defineStore } from "pinia";
import { createPersistedState } from 'pinia-plugin-persistedstate';

const store = createPinia();
store.use(createPersistedState());

export { store };

export default store;

// // 定义一个默认存储
// export const useDefaultStore = defineStore("default", {
//   state: () => ({
//     count: 1,
//   }),
//   getters: {},
//   actions: {},
// });
