import { AxiosInstance } from 'axios';
import instance from './axios';

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

  post<T>(url: string, params?: object): Promise<ResponseStructure<T>> {
    return this.instance.post(url, params);
  }
}

export const request = new Request(instance);
