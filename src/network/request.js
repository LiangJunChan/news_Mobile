import axios from 'axios'
export function request(config) {
  // 1.创建 axios 实例
  const instance = axios.create({
    baseURL: 'https://api.12he.cn/api/5e638740aabdb',
    // headers: { 'access-token': oeHsqLHcCXtELgdPRgEuoNaoZTARbqRB },
    timeout: 5000
  })
  // 2.拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err);
  })
  return instance(config)
}