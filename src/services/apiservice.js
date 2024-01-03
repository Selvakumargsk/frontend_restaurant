import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'http://localhost:8080/api',
});

ApiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiService;
