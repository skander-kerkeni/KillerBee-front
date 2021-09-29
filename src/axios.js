import axios from 'axios';
import router from '@/router'
const api_token = window.localStorage.getItem("api_token") ? window.localStorage.getItem("api_token") : "";

export const Axios = axios.create({
  baseURL: `http://localhost:8000/`,
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
//  const originalRequest = error.config;
  if (error.response.status === 403 || error.response.status === 401 ) {
    window.localStorage.removeItem("user-token"),
   router.push({name :'login'})
   
  }
  return Promise.reject(error);
});