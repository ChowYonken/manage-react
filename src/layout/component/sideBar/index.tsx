import type { MenuProps } from 'antd'
import { Menu, Flex, Divider } from 'antd'
import style from './index.module.less'
import { useAppSelector } from '@/store'
import { useCallback, useMemo } from 'react'
import { IMenu } from '@/store/types'
import { removePrefix } from '@/utils'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  // const menuList = useRouteLoaderData('layout')
  // console.log(menuList, '====SideBar-menuList=====')

  const { menus } = useAppSelector(state => state.user.userInfo)
  const navigate = useNavigate()

  const formatterRoutes = useCallback((routes: IMenu[]): MenuProps['items'] => {
    return routes?.map(item => {
      // 菜单隐藏
      if (item.hideMenu === 1) return null
      if (item.children.length > 1) {
        return {
          key: item.menuUrl + ',' + item.menuCode,
          label: item.menuName,
          linktype: item.linkType,
          children: formatterRoutes(item.children),
        }
      }
      // 只有一个子集
      if (item.children.length === 1) {
        return {
          key: item.children[0].menuUrl + ',' + item.children[0].menuCode,
          label: item.children[0].menuName,
          linktype: item.linkType,
        }
      }
      return {
        key: item.menuUrl + ',' + item.menuCode,
        label: item.menuName,
        linktype: item.linkType,
      }
    })
  }, [])

  const getMenuItems = useMemo(() => formatterRoutes(menus), [menus, formatterRoutes])

  const onClick: MenuProps['onClick'] = e => {
    const path = e.key.split(',')[0]
    // 去除前缀
    const finalPath = removePrefix(path, import.meta.env.VITE_APP_BASE_SYS_NAME)
    navigate(finalPath)
  }
  return (
    <>
      <Flex justify='center' align='center' className={style.logoStyle}>
        <div>后台管理系统</div>
      </Flex>
      <Menu
        onClick={onClick}
        style={{ width: 200 }}
        className={style.menuStyle}
        defaultSelectedKeys={['mail']}
        mode='inline'
        items={getMenuItems}
      />
    </>
  )
}

export default SideBar
