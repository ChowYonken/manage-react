// 验证码
export interface CodeResult {
  uId: string
  imageBase64: string
}

// 登录提交
export interface LoginSubmitParams {
  userName: string
  password: string
  captcha: string
  uid: string
}
