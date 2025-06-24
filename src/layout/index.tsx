import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { Layout } from 'antd'
import NavBar from './component/NavBar'
import TabBar from './component/TabBar'
const { Header, Sider, Content } = Layout
import style from './index.module.less'
import SideBar from './component/sideBar'
import Loading from '@/views/Loading'
import { Watermark } from 'antd'
import storage from '@/utils/storage'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const LayoutGlobal = () => {
  const token = storage.get('token')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const redirect = storage.get('redirect')
    if (!token) {
      navigate(`/login?redirect=${redirect}`, {
        replace: true,
      })
    }
  }, [token, navigate])

  // 监听路由变化，控制进度条
  useEffect(() => {
    NProgress.done()
    return () => {
      NProgress.start()
    }
  }, [location])

  return (
    <Layout className={style.layoutStyle}>
      <Sider className={style.siderStyle}>
        <SideBar />
      </Sider>
      <Layout>
        <Header className={style.headerStyle}>
          <NavBar />
          <TabBar />
        </Header>
        <Content className={style.contentStyle}>
          <Suspense fallback={<Loading />}>
            <Watermark content='Chow Yonken'>
              <Outlet />
            </Watermark>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutGlobal
