import React from 'react'
import { useAppSelector } from '@/store'
import NotAuth from './NotAuth'

interface AuthProps {
  menuCode: string
  children: React.ReactNode // 显式声明 children 类型
}
// 权限守卫组件
const Auth: React.FC<AuthProps> = ({ children, menuCode }) => {
  const { flattenRoutes } = useAppSelector(state => state.user.userInfo)
  if (flattenRoutes?.some(item => item.menuCode === menuCode)) return children
  return <NotAuth />
}

export default Auth
