// 图标映射表
import UserIcon from '@/assets/icon/svg/menu-svg/user.svg?react'
import SettingIcon from '@/assets/icon/svg/menu-svg/setting.svg?react'
import DashboardIcon from '@/assets/icon/svg/menu-svg/dashboard.svg?react'
import MenuIcon from '@/assets/icon/svg/menu-svg/menu.svg?react'
import HomeIcon from '@/assets/icon/svg/menu-svg/home.svg?react'
import TableIcon from '@/assets/icon/svg/menu-svg/table.svg?react'
import FormIcon from '@/assets/icon/svg/menu-svg/form.svg?react'
import MonitorIcon from '@/assets/icon/svg/menu-svg/monitor.svg?react'
import OrganizationIcon from '@/assets/icon/svg/menu-svg/organization.svg?react'
import SafeIcon from '@/assets/icon/svg/menu-svg/safe.svg?react'
import QualityIcon from '@/assets/icon/svg/menu-svg/quality.svg?react'
import ProcessIcon from '@/assets/icon/svg/menu-svg/process.svg?react'
import TreeIcon from '@/assets/icon/svg/menu-svg/tree.svg?react'
import NestedIcon from '@/assets/icon/svg/menu-svg/nested.svg?react'
import ExampleIcon from '@/assets/icon/svg/menu-svg/example.svg?react'
import LinkIcon from '@/assets/icon/svg/menu-svg/link.svg?react'
import InternationalIcon from '@/assets/icon/svg/menu-svg/international.svg?react'
import DocumentIcon from '@/assets/icon/svg/menu-svg/documentNew.svg?react'
import DeviseIcon from '@/assets/icon/svg/menu-svg/devise.svg?react'
import BimIcon from '@/assets/icon/svg/menu-svg/bim.svg?react'
import BudgetIcon from '@/assets/icon/svg/menu-svg/budgetContract.svg?react'
import PurchaseIcon from '@/assets/icon/svg/menu-svg/purchaseContract.svg?react'
import MonitorDeviceIcon from '@/assets/icon/svg/menu-svg/monitorDevice.svg?react'
import MapDistributionIcon from '@/assets/icon/svg/menu-svg/map-distribution.svg?react'
import MapRefrigerationIcon from '@/assets/icon/svg/menu-svg/map-refrigeration.svg?react'
import MapOpMoreIcon from '@/assets/icon/svg/menu-svg/map-op-more.svg?react'
import TimeIcon from '@/assets/icon/svg/menu-svg/time-filled.svg?react'
import ProgressIcon from '@/assets/icon/svg/menu-svg/progress.svg?react'
import SynthesisIcon from '@/assets/icon/svg/menu-svg/synthesis.svg?react'
import SpecialIcon from '@/assets/icon/svg/menu-svg/special.svg?react'
import SidebarCloseIcon from '@/assets/icon/svg/menu-svg/sidebar-close.svg?react'
import RefreshChangeIcon from '@/assets/icon/svg/menu-svg/refresh_change.svg?react'
import RefreshRightIcon from '@/assets/icon/svg/menu-svg/refresh_right.svg?react'
import LockIcon from '@/assets/icon/svg/menu-svg/lock.svg?react'
import LockOpenIcon from '@/assets/icon/svg/menu-svg/lock-open.svg?react'
import EyeIcon from '@/assets/icon/svg/menu-svg/eye.svg?react'
import EyeOpenIcon from '@/assets/icon/svg/menu-svg/eye-open.svg?react'
import EditIcon from '@/assets/icon/svg/menu-svg/edit.svg?react'
import EditOutlineIcon from '@/assets/icon/svg/menu-svg/edit_outline.svg?react'
import DeleteIcon from '@/assets/icon/svg/menu-svg/delete_btn.svg?react'
import AddIcon from '@/assets/icon/svg/menu-svg/add_btn.svg?react'
import ExportIcon from '@/assets/icon/svg/menu-svg/export.svg?react'
import ImportIcon from '@/assets/icon/svg/menu-svg/import.svg?react'
import FullscreenExitIcon from '@/assets/icon/svg/menu-svg/fullscreen_exit.svg?react'
import IsCollapseDownIcon from '@/assets/icon/svg/menu-svg/isCollapse-down.svg?react'
import IsCollapseUpIcon from '@/assets/icon/svg/menu-svg/isCollapse-up.svg?react'
import PasswordIcon from '@/assets/icon/svg/menu-svg/password.svg?react'
import BimTreeIcon from '@/assets/icon/svg/menu-svg/bim-tree.svg?react'
import BimMenuIcon from '@/assets/icon/svg/menu-svg/bim_menu.svg?react'
import QualityQIcon from '@/assets/icon/svg/menu-svg/qualityQ.svg?react'

import type { IconMapType } from './types'

// 图标映射表
export const iconMap: IconMapType = {
  user: UserIcon,
  setting: SettingIcon,
  dashboard: DashboardIcon,
  menu: MenuIcon,
  home: HomeIcon,
  table: TableIcon,
  form: FormIcon,
  monitor: MonitorIcon,
  organization: OrganizationIcon,
  safe: SafeIcon,
  quality: QualityIcon,
  process: ProcessIcon,
  tree: TreeIcon,
  nested: NestedIcon,
  example: ExampleIcon,
  link: LinkIcon,
  international: InternationalIcon,
  documentNew: DocumentIcon,
  devise: DeviseIcon,
  bim: BimIcon,
  budgetContract: BudgetIcon,
  purchaseContract: PurchaseIcon,
  monitorDevice: MonitorDeviceIcon,
  'map-distribution': MapDistributionIcon,
  'map-refrigeration': MapRefrigerationIcon,
  'map-op-more': MapOpMoreIcon,
  'time-filled': TimeIcon,
  progress: ProgressIcon,
  synthesis: SynthesisIcon,
  special: SpecialIcon,
  'sidebar-close': SidebarCloseIcon,
  refresh_change: RefreshChangeIcon,
  refresh_right: RefreshRightIcon,
  lock: LockIcon,
  'lock-open': LockOpenIcon,
  eye: EyeIcon,
  'eye-open': EyeOpenIcon,
  edit: EditIcon,
  edit_outline: EditOutlineIcon,
  delete_btn: DeleteIcon,
  add_btn: AddIcon,
  export: ExportIcon,
  import: ImportIcon,
  fullscreen_exit: FullscreenExitIcon,
  'isCollapse-down': IsCollapseDownIcon,
  'isCollapse-up': IsCollapseUpIcon,
  password: PasswordIcon,
  'bim-tree': BimTreeIcon,
  bim_menu: BimMenuIcon,
  qualityQ: QualityQIcon,
}

// 获取图标组件
export const getIconComponent = (
  iconName: string
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null => {
  return iconMap[iconName] || null
}
