import style from '../index.module.less'
import { Dropdown, Avatar, Flex, Breadcrumb } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import storage from '@/utils/storage'
import { useAppDispatch } from '@/store'
import { resetState } from '@/store/modules/userSlice'
import { useNavigate, useLocation } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    key: 'logout',
    label: <div>退出登录</div>,
  },
]
const NavBar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e)
    if (e.key === 'logout') {
      storage.clear()
      dispatch(resetState())
      navigate(`/login?redirect=${location.pathname}`)
    }
  }

  return (
    <div className={style.navHeader}>
      <Flex align='center' justify='space-between' style={{ height: '100%', width: '100%' }}>
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: 'An Application',
            },
          ]}
        />
        <Dropdown menu={{ items, onClick: handleMenuClick }}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </Flex>
    </div>
  )
}

export default NavBar
