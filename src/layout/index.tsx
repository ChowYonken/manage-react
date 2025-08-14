import { Outlet, useNavigate } from 'react-router-dom'
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
import useNProgress from '@/hooks/useNProgress'
import { useActiveRouter } from './index'

const LayoutGlobal = () => {
  const token = storage.get('token')
  const navigate = useNavigate()
  useNProgress()
  const { activeParentKey, activeKey } = useActiveRouter()
  useEffect(() => {
    const redirect = storage.get('redirect')
    if (!token) {
      navigate(`/login?redirect=${redirect}`, {
        replace: true,
      })
    }
  }, [token, navigate])

  return (
    <Layout className={style.layoutStyle}>
      <Sider className={style.siderStyle}>
        <SideBar activeParentKey={activeParentKey} activeKey={activeKey} />
      </Sider>
      <Layout>
        <Header className={style.headerStyle}>
          <NavBar />
          <TabBar />
        </Header>
        <Content className={style.contentStyle}>
          <Suspense fallback={<Loading />}>
            <Watermark content='Chow Yonken' style={{ width: '100%', height: '100%' }}>
              <Outlet />
            </Watermark>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutGlobal
