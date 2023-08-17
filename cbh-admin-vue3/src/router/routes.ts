import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { title: '登录', code: '',  premissionCode: ''},
  },
  {
    path: '/',
    component: () => import('@/layout/default/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
];
