import { defineStore } from "pinia";

interface DefaultState {
    count: number
}

export const useDefaultStore = defineStore("default", { // default + Store

    // ref
    state: (): DefaultState => ({
        count: 1,
    }),

    // computed
    getters: {
        // count2(state) {
        //     return state.count * 2
        // }

        // 单独用 this + ts 的话，可能要手动标记一下类型
        // count2(): number {
        //     return this.count * 2
        // }

        count2(state) {
            return this.count * 2
        }
    },


    // 普通方法
    actions: {
        addCount() {
            this.count++
        }
    },
});
