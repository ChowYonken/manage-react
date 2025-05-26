import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import NavBar from './component/NavBar'
import TabBar from './component/TabBar'
const { Header, Sider, Content } = Layout
import style from './index.module.less'

const LayoutGlobal = () => {
  return (
    <Layout className={style.layoutStyle}>
      <Sider className={style.siderStyle}>Sider</Sider>
      <Layout>
        <Header className={style.headerStyle}>
          <NavBar />
          <TabBar />
        </Header>
        <Content className={style.contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutGlobal
