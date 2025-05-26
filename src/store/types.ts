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

export enum MenuHideEnum {
  // 显示
  SHOW = 0,
  // 隐藏
  HIDE = 1,
}

export enum MenuLinkType {
  // 内部
  INNER = 0,
  // 外部
  OUTER = 1,
}
