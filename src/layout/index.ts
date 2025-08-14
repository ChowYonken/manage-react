import { useEffect, useState } from 'react'
import { useLocation, useMatches } from 'react-router-dom'

export function useActiveRouter() {
  const location = useLocation()
  const matches = useMatches()
  // 当前活跃路由信息的父级路由信息
  const [activeParentKey, setActiveParentKey] = useState<string[]>(
    matches
      ?.filter((match, index) => {
        if (index === 0) return
        return match
      })
      ?.map(
        match =>
          `/${import.meta.env.VITE_APP_BASE_SYS_NAME}${match.pathname},${(match.data as { menuCode: string })?.menuCode}`
      )
  )

  // 当前活跃路由信息
  const [activeKey, setActiveKey] = useState<string>(
    `/${import.meta.env.VITE_APP_BASE_SYS_NAME}${location.pathname},${(matches[matches.length - 1]?.data as { menuCode: string })?.menuCode}`
  )

  useEffect(() => {
    setActiveParentKey(
      matches
        ?.filter((match, index) => {
          if (index === 0) return
          return match
        })
        ?.map(
          match =>
            `/${import.meta.env.VITE_APP_BASE_SYS_NAME}${match.pathname},${(match.data as { menuCode: string })?.menuCode}`
        )
    )
    setActiveKey(
      `/${import.meta.env.VITE_APP_BASE_SYS_NAME}${location.pathname},${(matches[matches.length - 1]?.data as { menuCode: string })?.menuCode}`
    )
  }, [location, matches])

  return {
    activeParentKey,
    activeKey,
  }
}
