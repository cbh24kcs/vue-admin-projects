import layout from "@/layout/default/index.vue"

export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/index.vue'),
        meta: { title: '登录', code: '', premissionCode: '' },
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
]