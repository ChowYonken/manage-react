import { MenuHideEnum, MenuLinkType } from '@/enum/common'

export interface UserInfo {
  userId: string
  orgId: string
  orgName: string
  userName: string
  realName: string
  phone: string
  email: string
  menus: IMenu[]
  apiList: string[]
  flattenRoutes?: IMenu[]
}

export interface userState {
  token: string
  userInfo: UserInfo
}

export interface IMenu {
  children: IMenu[]
  filePath: string
  hideMenu: MenuHideEnum
  icon: string
  id: string
  linkType: MenuLinkType
  menuCode: string
  menuName: string
  menuUrl: string
  module: string
}
