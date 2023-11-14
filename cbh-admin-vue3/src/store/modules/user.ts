import { defineStore } from 'pinia';
import { login, getUserInfo } from '@/api/user/index';
import { loginParams } from '@/api/user/type';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {},
  }),
  actions: {
    async login(params: loginParams) {
      const res = await login(params);
      if (res.code == 0) {
        this.token = res.data.token;
      } else {
        throw res;
      }
    },
    async getUserInfo() {
      const res = await getUserInfo();
      if (res.code == 0) {
        this.userInfo = res.data;
      } else {
        throw res;
      }
    },
    logout() {
      this.token = '';
      this.userInfo = {};
    },
  },
  persist: {
    key: 'store',
    storage: sessionStorage,
    paths: ['token', 'userInfo'],
  },
});
