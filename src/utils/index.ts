/**
 * 工具类函数的封装
 * author：chowyonken
 */

// 金钱千分位格式化
export const formatterMoney = (money: number): string => {
  return money.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

// 时间格式化
/**
 * Parse the time to string
 * @param {(Object|string|number)} time 时间
 * @param {string} cFormat 格式化字符串
 * @param {boolean} fill 是否填充0
 * @returns {string | undefined}
 */
export const parseTime = (
  time?: string | number | Date,
  cFormat?: string,
  fill: boolean = true
): string | undefined => {
  if (!time) return undefined

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: any
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  interface formatObj {
    [k: string]: number | string
  }
  const formatObj: formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value as number]
    }
    return fill ? value.toString().padStart(2, '0') : value.toString()
  })
  return time_str
}

// 获取域名后的路径
export function getPathAfterDomain(url: string): string | null {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname
  } catch (error) {
    console.error('Invalid URL:', error)
    return null
  }
}

import { IMenu } from '@/interfaces/common'
// 嵌套路由扁平化
export function flattenRoutes(routes: IMenu[]): IMenu[] {
  return routes.reduce((acc, route) => {
    if (route.children) {
      return [...acc, route, ...flattenRoutes(route.children)]
    }
    return [...acc, route]
  }, [] as IMenu[])
}

// 过滤菜单模块
export function filterMenuModule(menu: IMenu[]): IMenu[] {
  // 过滤第一层级即可
  return menu.filter(item => {
    return item.module === import.meta.env.VITE_APP_BASE_SYS_NAME
  })
}

// 去除基础路径前缀
export function removePrefix(path: string, prefix: string) {
  const normalizedPrefix = prefix.startsWith('/') ? prefix : `/${prefix}`
  return path.startsWith(normalizedPrefix)
    ? '/' + path.slice(normalizedPrefix.length).split('/').filter(Boolean).join('/')
    : path
}

// 处理第三层级菜单
export function handleThreeMenu(menu: string, parentMenuName: string) {
  const result = menu.replace(new RegExp(`^/${import.meta.env.VITE_APP_BASE_SYS_NAME}`), '')
  return `/${import.meta.env.VITE_APP_BASE_SYS_NAME}/${parentMenuName}${result}`
}
