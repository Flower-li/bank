import Axios from "axios";

let axios = Axios.create({
  baseURL: "http://mock-api.com/wjzpZenX.mock"
  // baseURL: "10.48.230.74:8092"
});

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // config.headers.aaa=localStorage.getItem("token")
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function(config) {
    // if(config.status==401){
    //   window.location.href="/login";
    // }
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default axios;
