import { createBrowserRouter, Navigate, useRoutes, Routes } from 'react-router-dom'
import { memo } from 'react'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import NotAuth from '@/views/NotAuth'
import Menu from '@/views/system/menu'
import LayoutGlobal from '@/layout'

const router = [
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/',
    element: <LayoutGlobal />, // 子路由
    children: [
      {
        index: true, // 新增索引路由
        element: <Navigate to='dashboard' replace />, // 自动重定向
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <Navigate to='/404' />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '/403',
    element: <NotAuth />,
  },
]

// 路由定义方式：1.组件路由方式
// const Router = memo(() => {
//   return useRoutes(router)
// })

// export default Router

// 2.API路由定义 推荐
const Router = createBrowserRouter(router)
export default Router
