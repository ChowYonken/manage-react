import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default function useNProgress() {
  const location = useLocation()

  // 监听路由变化，控制进度条
  useEffect(() => {
    NProgress.done()
    return () => {
      NProgress.start()
    }
  }, [location])
}
