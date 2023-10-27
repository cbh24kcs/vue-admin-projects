import { defineStore } from 'pinia';

const InitUserInfo = {
    name: ""
};

export const useUserStore = defineStore("user", {
    state: () => ({
        token: 'main_token', // 默认token不走权限
        userInfo: { ...InitUserInfo },
    }),
    actions: {
        async login(){}
        
    }
})