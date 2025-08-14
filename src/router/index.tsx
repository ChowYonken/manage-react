import { createBrowserRouter, Navigate, useRoutes, Routes, Link } from 'react-router-dom'
import React, { memo } from 'react'
import LayoutGlobal from '@/layout/index.tsx'
import AuthLoader from './AuthLoader'
import Auth from '@/components/Auth'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import NotAuth from '@/views/NotAuth'
import { IBreadcrumbItem } from '@/interfaces/router'

const Dashboard = React.lazy(() => import('@/views/Dashboard'))
const WebMenu = React.lazy(() => import('@/views/system/menu/webMenu/index'))
const AppMenu = React.lazy(() => import('@/views/system/menu/appMenu/index'))
const Personal = React.lazy(() => import('@/views/organization/personal/index'))
const JavaCpn = React.lazy(() => import('@/views/system/codegen/java'))
const VueCpn = React.lazy(() => import('@/views/system/codegen/vue'))

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
    loader: () => {
      return {
        title: '首页',
        menuCode: 'homePageItem',
      }
    },
    handle: {
      crumb: (data: IBreadcrumbItem) => <Link to='/homePageItem'>{data.title}</Link>,
    },
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
        loader: () => {
          return {
            title: 'Dashboard',
            menuCode: 'homePageItem',
          }
        },
        handle: {
          crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
        },
      },
      {
        path: 'organization',
        loader: () => {
          return {
            title: '个人中心',
            menuCode: 'userCode',
          }
        },
        children: [
          {
            path: 'personal',
            loader: () => {
              return {
                title: '个人中心',
                menuCode: 'PersonalStaging',
              }
            },
            handle: {
              crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
            },
            element: (
              <Auth menuCode='PersonalStaging'>
                <Personal />
              </Auth>
            ),
          },
        ],
      },
      {
        path: 'system',
        loader: () => {
          return {
            title: '系统管理',
            menuCode: 'system',
          }
        },
        children: [
          {
            path: 'codegen',
            loader: () => {
              return {
                title: '代码工具',
                menuCode: 'codeGenerator',
              }
            },
            handle: {
              crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
            },
            children: [
              {
                path: 'java',
                loader: () => {
                  return {
                    title: 'Java代码生成',
                    menuCode: 'GenJava',
                  }
                },
                handle: {
                  crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
                },
                element: (
                  <Auth menuCode='GenJava'>
                    <JavaCpn />
                  </Auth>
                ),
              },
              {
                path: 'vue',
                loader: () => {
                  return {
                    title: 'Vue代码生成',
                    menuCode: 'GenVue',
                  }
                },
                handle: {
                  crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
                },
                element: (
                  <Auth menuCode='GenVue'>
                    <VueCpn />
                  </Auth>
                ),
              },
            ],
          },
          {
            path: 'menu',
            loader: () => {
              return {
                title: '菜单管理',
                menuCode: 'menu1',
              }
            },
            handle: {
              crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
            },
            children: [
              {
                path: 'web',
                loader: () => {
                  return {
                    title: 'web菜单',
                    menuCode: 'SystemMenuWeb',
                  }
                },
                handle: {
                  crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
                },
                element: (
                  <Auth menuCode='SystemMenuWeb'>
                    <WebMenu />
                  </Auth>
                ),
              },
              {
                path: 'app',
                loader: () => {
                  return {
                    title: 'app菜单',
                    menuCode: 'SystemMenuApp',
                  }
                },
                handle: {
                  crumb: (data: IBreadcrumbItem) => <span>{data.title}</span>,
                },
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
