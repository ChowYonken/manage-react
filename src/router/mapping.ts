// 特殊处理：为了解决后台菜单路由填写不规范
// 路径映射配置：后端路径 -> 实际路由路径
export const PATH_MAPPING: Record<string, string> = {
  // 示例：后端返回 /system/codegen/java，实际路由是 /system/codegen/java
  '/systemApp/menu': '/systemApp/system/menu',
  '/systemApp/codegen': '/systemApp/system/codegen',
}
