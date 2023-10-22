import { useDemoStore } from "@/store/demo"

export function useX() {
    const demoStore = useDemoStore()

    // state
    // const x = demoStore.x
    // const {x} = demoStore
    const x = storeToRefs(demoStore).x


    return { x }
}
