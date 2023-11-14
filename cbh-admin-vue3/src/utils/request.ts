import axios, { AxiosInstance } from 'axios';
import { useUserStore } from '@/store';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    const userStore = useUserStore();
    if (userStore.token) {
      config.headers['token'] = userStore.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;

// code\message\data

interface ResponseStructure<T> {
  code: number;
  message: string;
  data: T;
}

class Request {
  private instance: AxiosInstance;

  constructor(instance) {
    this.instance = instance;
  }

  get() {}

  post<RequestParams, DataStructure>(url: string, params?: RequestParams): Promise<ResponseStructure<DataStructure>> {
    return this.instance.post(url, params);
  }
}

export const request = new Request(instance);
