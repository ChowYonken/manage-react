import type { MenuProps } from 'antd'
import { Menu, Flex, Divider } from 'antd'
import style from './index.module.less'
import { useAppSelector } from '@/store'
import { useCallback, useEffect, useMemo, useState, memo } from 'react'
import { IMenu } from '@/interfaces/common'
import { removePrefix, handleThreeMenu } from '@/utils'
import { useNavigate, useLocation, useMatches } from 'react-router-dom'
import { PATH_MAPPING } from '@/router/mapping'

const SideBar = memo(
  ({ activeParentKey, activeKey }: { activeParentKey: string[]; activeKey: string }) => {
    // const menuList = useRouteLoaderData('layout')

    const { menus } = useAppSelector(state => state.user.userInfo)
    const navigate = useNavigate()

    // 获取实际路由路径
    const getActualPath = useCallback((menuUrl: string, level: number, parentMenuCode: string) => {
      // 先尝试从映射配置中获取
      if (PATH_MAPPING[menuUrl]) {
        return PATH_MAPPING[menuUrl]
      }
      // 第三层级特殊处理
      if (level === 3) {
        // 如果没有映射，使用 handleThreeMenu 处理
        return handleThreeMenu(menuUrl, parentMenuCode)
      }
      return menuUrl
    }, [])

    const formatterRoutes = useCallback(
      (routes: IMenu[], level: number = 1, parentMenuCode: string = ''): MenuProps['items'] => {
        return routes?.map(item => {
          if (level === 1) {
            parentMenuCode = item.menuCode
          }

          // 菜单隐藏
          if (item.hideMenu === 1) return null

          // 获取实际路径
          const actualPath = getActualPath(item.menuUrl, level, parentMenuCode)

          if (item.children.length > 1) {
            return {
              key: actualPath + ',' + item.menuCode,
              label: item.menuName,
              linktype: item.linkType,
              children: formatterRoutes(item.children, level + 1, parentMenuCode),
              level,
            }
          }

          // 只有一个子集
          if (item.children.length === 1) {
            const childActualPath = getActualPath(
              item.children[0].menuUrl,
              level + 1,
              parentMenuCode
            )
            return {
              key: childActualPath + ',' + item.children[0].menuCode,
              label: item.children[0].menuName,
              linktype: item.linkType,
              level,
            }
          }

          return {
            key: actualPath + ',' + item.menuCode,
            label: item.menuName,
            linktype: item.linkType,
            level,
          }
        })
      },
      [getActualPath]
    )

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
          defaultOpenKeys={activeParentKey}
          selectedKeys={[activeKey]}
          mode='inline'
          items={getMenuItems}
        />
      </>
    )
  }
)

export default SideBar
