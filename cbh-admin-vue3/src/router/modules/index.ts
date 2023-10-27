import { RouteRecordRaw } from 'vue-router';
import base from './base'

// webpack：  require.context
// vite：     import.meta.glob

export const routes: Array<RouteRecordRaw> = [
    ...base
];
