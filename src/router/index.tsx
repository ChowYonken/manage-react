import { createBrowserRouter, Navigate, useRoutes, Routes } from 'react-router-dom'
import React, { memo } from 'react'
import LayoutGlobal from '@/layout'
import AuthLoader from './AuthLoader'
import Auth from '@/views/Auth'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import NotAuth from '@/views/NotAuth'
const Dashboard = React.lazy(() => import('@/views/Dashboard'))
const WebMenu = React.lazy(() => import('@/views/system/menu/webMenu/index'))
const AppMenu = React.lazy(() => import('@/views/system/menu/appMenu/index'))
const Personal = React.lazy(() => import('@/views/organization/personal/index'))

const router = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    // id: 'layout',
    // loader: async () => {
    //   return AuthLoader()
    // },
    path: '/',
    element: <LayoutGlobal />, // 子路由
    children: [
      {
        index: true, // 新增索引路由
        element: <Navigate to='homePageItem' replace />, // 自动重定向
      },
      {
        path: 'homePageItem',
        element: (
          <Auth menuCode='homePageItem'>
            <Dashboard />
          </Auth>
        ),
      },
      {
        path: 'organization',
        children: [
          {
            path: 'personal',
            element: (
              <Auth menuCode='homePageItem'>
                <Personal />
              </Auth>
            ),
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: 'web',
            element: (
              <Auth menuCode='SystemMenuWeb'>
                <WebMenu />
              </Auth>
            ),
          },
          {
            path: 'app',
            element: (
              <Auth menuCode='SystemMenuApp'>
                <AppMenu />
              </Auth>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '/403',
    element: <NotAuth />,
  },
  {
    path: '/*',
    element: <Navigate to='/404' />,
  },
]

// 路由定义方式：1.组件路由方式
// const Router = memo(() => {
//   return useRoutes(router)
// })

// export default Router

// 2.API路由定义 推荐
const Router = createBrowserRouter(router, {
  basename: '/' + import.meta.env.VITE_APP_BASE_SYS_NAME,
})

export default Router
