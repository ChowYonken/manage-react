export default {
  /**
   * 设置值
   * @param key {string} 参数名称
   * @param value {any} 写入值
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 获取值
   * @param key {string} 参数名称
   * @returns 获取的值
   */
  get(key: string) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },
  /**
   *删除某个值
   * @param key {string} 参数名称
   */
  remove(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * 清空所有值
   */
  clear() {
    localStorage.clear()
  },
}
