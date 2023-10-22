import { defineStore } from "pinia";

export const useDemoStore = defineStore("demo", () => {

    // state
    const x = ref(0)

    // getter
    const xx = computed(() => x.value * x.value)

    // action
    function addX() {
        x.value++
    }

    return { x, xx, addX }

});
