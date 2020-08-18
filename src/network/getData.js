import { request } from './request';
export function getZhihuData() {
  return request({
    // url: '/zhihu',
    headers: { 'access-token': 'oeHsqLHcCXtELgdPRgEuoNaoZTARbqRB' },
    params:{
      type:'zhihu'
    }
  })
}
export function getWeiboData() {
  return request({
    // url: '/zhihu',
    headers: { 'access-token': 'oeHsqLHcCXtELgdPRgEuoNaoZTARbqRB' },
    params:{
      type:'weibo'
    }
  })
}
export function getToutiaoData() {
  return request({
    // url: '/zhihu',
    headers: { 'access-token': 'oeHsqLHcCXtELgdPRgEuoNaoZTARbqRB' },
    params:{
      type:'toutiao'
    }
  })
}
export function getWeixinData() {
  return request({
    // url: '/zhihu',
    headers: { 'access-token': 'oeHsqLHcCXtELgdPRgEuoNaoZTARbqRB' },
    params:{
      type:'weixin'
    }
  })
}