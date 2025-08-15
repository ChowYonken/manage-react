// 图标组件入口
import { memo } from 'react'
import { getIconComponent } from './iconMap'
import type { IconProps } from './types'

const SvgIcon = memo(({ iconName, className, style, size = 16, color = '#fff' }: IconProps) => {
  const IconComponent = getIconComponent(iconName)

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent className={className} style={style} width={size} height={size} fill={color} />
  )
})
// 设置组件在 React DevTools 中的显示名称
SvgIcon.displayName = 'SvgIcon'

export default SvgIcon
