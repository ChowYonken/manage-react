// 图标组件类型定义
export interface IconProps {
  iconName: string
  className?: string
  style?: React.CSSProperties
  size?: number | string
  color?: string
}

export interface IconMapType {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
