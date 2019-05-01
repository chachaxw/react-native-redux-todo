import axios from 'axios';
import qs from 'qs';

const baseUrl = 'http://localhost:3000';

// axios config options
const options = {
  baseURL: baseUrl,
  timeout: 10000,
  // 查询对象序列化函数
  paramsSerializer: (params) => qs.stringify(params),
};

const AxiosInstance = axios.create(options);

export function getTodos(params) {
  return AxiosInstance.get(`/getTodos`, params);
}

export function postTodo(params) {
  return AxiosInstance.post(`/`, params);
}

export function putTodo(id, params) {
  return AxiosInstance.put(`/${id}`, params);
}

export function deleteTodo(id) {
  return AxiosInstance.put(`/${id}`);
}