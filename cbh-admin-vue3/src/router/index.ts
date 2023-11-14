import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from 'vue-router';
import { useTitle } from "@vueuse/core";

// 导入默认路由
const defaultModules = import.meta.glob('./modules/**/default.ts', { eager: true })

// 导入其他模块路由
const otherModules = import.meta.glob('./modules/**/!(default).ts', { eager: true })


// 模块转换路由
function mapModulesRoutes(modules: Record<string, any>): Array<RouteRecordRaw> {
  const list: Array<RouteRecordRaw> = []
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    list.push(...modList);
  })
  return list
}

//组合路由
const allRoutes = [...mapModulesRoutes(otherModules), ...mapModulesRoutes(defaultModules)]




export const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
});
