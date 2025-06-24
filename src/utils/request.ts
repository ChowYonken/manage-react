import axios from 'axios'
import { showLoading, hideLoading } from './Loading'
import { message } from 'antd'
import storage from '@/utils/storage'
import {getPathAfterDomain} from '@/utils/index'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.interceptors.request.use(
  config => {
    // showLoading()
    if (storage.get('token')) {
      config.headers['token'] = storage.get('token')
    }
    return config
  },
  err => {
    // hideLoading()
    console.log(err)
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  response => {
    // hideLoading()
    const { code, msg } = response.data
    if (code === 0 || code === 200) {
      return response.data
    }
    // 响应数据为二进制流处理(Excel导出)
    if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
      return response
    }

    if (code === 9001) {
      storage.clear()
      window.location.href = `/login?redirect=${getPathAfterDomain(window.location.href)}`
      message.error(msg + '请重新登录')
      return
    }

    message.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  error => {
    // hideLoading()
    console.log('err' + error) // for debug
    if (error.response.data && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        case 401:
          storage.clear()
          window.location.href = `/login?redirect=${getPathAfterDomain(window.location.href)}`
          location.reload()
          break
        // 403 token过期
        case 403:
          storage.clear()
          window.location.href = `/login?redirect=${getPathAfterDomain(window.location.href)}`
          location.reload()
          break
        // 404请求不存在
        case 404:
          message.error('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          message.error(error.response.data.message)
      }
    } else {
      if (error.message) {
        message.error(error.message)
      }
    }
    return Promise.reject(error.response)
  }
)

export default {
  get: <T>(url: string, params?: object): Promise<T> => request.get(url, { params }),
  post: <T>(url: string, data?: object): Promise<T> => request.post(url, data),
}
