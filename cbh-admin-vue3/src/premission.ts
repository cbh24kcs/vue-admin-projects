import 'nprogress/nprogress.css';
import { useTitle } from "@vueuse/core";

import NProgress from 'nprogress';

import { router } from '@/router';

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        useTitle(to.meta.title + " | 前端任务管理系统");
    } else {
        useTitle("前端任务管理系统");
    }

    next();
});