import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://api.github.com/',
  validateStatus: (status: number) => {
    return status >= 200 && status < 503;
  },
  headers: {
    Accept: 'application/vnd.github+json',
  },
};

const http = axios.create(axiosConfig);

export default http;
