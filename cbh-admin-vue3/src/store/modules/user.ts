import { defineStore } from 'pinia';
import { login } from "@/api/user/index"
import { loginParams } from "@/api/user/type"


export const useUserStore = defineStore("user", {
    state: () => ({
        token: "",
        userInfo: {},
    }),
    actions: {
        async login(params: loginParams) {
            const res = await login(params) as any
            if (res.code == 0) {
                this.token = res.data.token
                console.log(res)
            }
        },
        // async getUserInfo(params){
        //     const res = awiat 
        // }

    },
    persist: {
        key: "store",
        storage: sessionStorage,
        paths: ["token"]
    }
})