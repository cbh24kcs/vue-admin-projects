import { loginParams } from './type';
import { request } from '@/utils/request';

const api = {
  login: '/login', //登录
  getUserInfo: '/user/info', //获取当前用户信息
  userList: '/user/list',
};

export function login(params: loginParams) {
  interface LoginResponse {
    token: string;
  }

  return request.post<loginParams, LoginResponse>(api.login, params);
}

export function getUserInfo(): any {
  return request.post(api.getUserInfo);
}
