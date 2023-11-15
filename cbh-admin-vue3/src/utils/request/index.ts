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

  post<T, U>(url: string, params?: T): Promise<ResponseStructure<U>> {
    return this.instance.post(url, params);
  }
}

export const request = new Request(instance);
