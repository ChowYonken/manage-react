import { createRoot } from 'react-dom/client'
import Loading from './Loading.tsx'

/**
 * 思路：
 * 创建节点
 * 添加到body
 * 将loading组件添加到该节点中
 */

/**
 * 注意：
 * showLoading：第一个请求开始添加loading
 * hideLoading：最后一个请求结束移除loading
 */

let counter = 0
const showLoading = () => {
  if (counter == 0) {
    const loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    document.body.appendChild(loading)
    createRoot(loading).render(<Loading />)
  }
  counter++
}

const hideLoading = () => {
  if (counter < 0) return
  counter--
  if (counter == 0) {
    document.body.removeChild(document.getElementById('loading') as HTMLDivElement)
  }
}

export { showLoading, hideLoading }
