import { loginParams } from './type';
import { request } from '@/utils/request';

const api = {
  login: '/login', //登录
  getUserInfo: '/user/info', //获取当前用户信息
  userList: '/user/list',
};

export function login(params: loginParams) {
  interface ResData {
    token: string;
  }

  return request.post<ResData>(api.login, params);
}

export function getUserInfo() {
  interface ResData {
    token: string;
  }
  return request.post<ResData>(api.getUserInfo);
}
