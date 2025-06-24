import Router from '@/router/index'
import { BrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { memo, useEffect } from 'react'
import style from './App.module.less'

const App = memo(() => {
  return (
    <div className={style.app}>
      {/* 路由定义方式：1.组件路由方式 */}
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
      <RouterProvider router={Router} />
    </div>
  )
})

export default App
