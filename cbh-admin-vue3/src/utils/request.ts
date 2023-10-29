import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers["token"] = localStorage.getItem("token")
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
