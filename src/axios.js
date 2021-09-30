import axios from 'axios';
import router from '@/router';
import {delta, gamma} from '../utils/sourcing/index';

const api_token = window.localStorage.getItem("api_token") ? window.localStorage.getItem("api_token") : "";

export const Axios = axios.create({
  baseURL: `http://localhost:8000/`,
  // transformRequest: [
  //   (data, headers) => {
  //     if (data !== undefined) {
  //       console.log(delta(JSON.stringify(data)));
  //     }
  //   }
  // ]
  // transformResponse: [
  //   (data, headers) => {
  //     if (data !== undefined) {
  //       return JSON.stringify(gamma(JSON.parse(data)));
  //     }
  //   }
  // ]
})

 Axios.interceptors.request.use(
  async config => {
    config.headers = { 
      'Authorization': `api_token ${api_token}`, //Ici appelez le localStorage pour avoir le cookie
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.resolve(error)
});

Axios.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 || error.response.status === 401 && !originalRequest._retry) {
    window.localStorage.removeItem("user-token"),
   router.push({name :'login'})
   
  }
  return Promise.reject(error);
});