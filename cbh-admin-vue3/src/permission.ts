import 'nprogress/nprogress.css';
import { useTitle } from '@vueuse/core';
import NProgress from 'nprogress';
import { router } from '@/router';
import { useUserStore } from '@/store';

NProgress.configure({ showSpinner: false });

const whiteListRouters = ['/login'];

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    useTitle(to.meta.title + ' | 前端任务管理系统');
  } else {
    useTitle('前端任务管理系统');
  }
  NProgress.start();

  const userStore = useUserStore();
  if (userStore.token) {
    //如果有token，不允许再进入登录页
    if (to.path === '/login') {
      next(false);
      return;
    }
    next();
  } else {
    //如果没有token，但在白名单，可以直接进
    if (whiteListRouters.indexOf(to.path) !== -1) {
      next();
    } else {
      //不在白名单的页面需要登录
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
    }
  }
});

router.afterEach(to => {
  NProgress.done();
});
