// export interface AuthLoader {
//   buttonList:
//   menuList:
//   flattenList:
// }

import { getPersistedState } from '@/store'
const AuthLoader = async () => {
  const res = await getPersistedState()
  return {
    buttonList: res?.user?.userInfo?.apiList || [],
    menuList: res?.user?.userInfo?.menus || [],
  }
}
export default AuthLoader
