import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from 'vue-router';
import { routes } from "./modules";
import { useTitle } from "@vueuse/core";

// 导入默认路由
const defaultModules = import.meta.glob('./modules/**/default.ts', { eager: true })

// 导入其他模块路由
const otherModules = import.meta.glob('./modules/**/!(default).ts', { eager: true })

console.log(otherModules)
// 模块转换路由
function mapModulesRouters(modules: Record<string, unknown>): Array<RouteRecordRaw> {
  const routers: Array<RouteRecordRaw> = []
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
  })
  return routers
}


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    useTitle(to.meta.title + " | 前端任务管理系统");
  } else {
    useTitle("前端任务管理系统");
  }

  next();
});
