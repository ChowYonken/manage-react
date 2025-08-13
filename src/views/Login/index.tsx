import { memo, useEffect, useMemo } from 'react'
import { Form, Input, Button } from 'antd'
import type { FormProps } from 'antd'
import LoginWrapper from './style'
import { useGetVertifyCode, useLoginSubmit, useGetUserInfo } from '@/api/common'
import type { LoginSubmitParams } from '@/api/common/types'
import { useAppDispatch } from '@/store'
import { setToken, setUserInfo } from '@/store/modules/userSlice'
import { useSearchParams, useNavigate } from 'react-router-dom'
import storage from '@/utils/storage'
import useNProgress from '@/hooks/useNProgress'

interface FieldType {
  userName: string
  password: string
  captcha: string
}
const login = memo(() => {
  const [form] = Form.useForm()
  const { data, run } = useGetVertifyCode()
  const { runAsync: submitRun, loading } = useLoginSubmit()
  const { runAsync: getUserInfoRun } = useGetUserInfo()
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  useNProgress()
  const onFinish: FormProps<FieldType>['onFinish'] = async values => {
    const params: LoginSubmitParams = {
      ...values,
      uid: data?.data?.uId as string,
    }
    try {
      const res = await submitRun(params)
      // 保存token和用户信息到store中
      dispatch(setToken(res?.data?.token))
      storage.set('token', res?.data?.token)
      const userInfo = await getUserInfoRun()
      const redirect = searchParams.get('redirect')
      dispatch(setUserInfo(userInfo?.data))
      navigate(redirect || '/', { replace: true })
      // 清除重定向缓存
      storage.remove('redirect')
    } catch (error) {
      run()
    }
  }
  const getVertifyCode = useMemo(() => {
    return (
      <img
        src={`data:image/png;base64,${data?.data?.imageBase64 || ''}`}
        style={{ width: '106px', height: '38px', cursor: 'pointer' }}
        onClick={run}
      ></img>
    )
  }, [data, run])

  useEffect(() => {
    const redirect = storage.get('redirect')
    run()
    if (redirect) {
      navigate(`/login?redirect=${redirect}`)
    }
  }, [run, navigate])

  useEffect(() => {
    // 登录后访问登录页面，自动跳转到登录前页面
    const redirect = searchParams.get('redirect')
    if (storage.get('token')) {
      navigate(redirect || '/')
    }
  }, [searchParams, navigate])

  return (
    <LoginWrapper>
      <div className='login-form'>
        <div className='login-form-wrapper'>
          <div className='login-form-wrapper-title'>登录</div>
          <Form form={form} onFinish={onFinish} autoComplete='off' layout='vertical'>
            <Form.Item<FieldType>
              label='账号'
              name='userName'
              rules={[{ required: true, message: '请输入您的账号!' }]}
            >
              <Input size='large' />
            </Form.Item>

            <Form.Item<FieldType>
              label='密码'
              name='password'
              rules={[{ required: true, message: '请输入您的密码!' }]}
            >
              <Input.Password size='large' />
            </Form.Item>
            <Form.Item<FieldType>
              label='验证码'
              name='captcha'
              rules={[{ required: true, message: '请输入验证码!' }]}
            >
              <Input addonAfter={getVertifyCode} size='large' />
            </Form.Item>
            <Form.Item label={null}>
              <Button
                type='primary'
                size='large'
                htmlType='submit'
                style={{ width: '100%' }}
                loading={loading}
                disabled={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginWrapper>
  )
})

export default login
