import request from '@/utils/request'
import { useRequest } from 'ahooks'
import type { ResponseType } from '@/interfaces/base'
import type { CodeResult, LoginSubmitParams } from './types'
import type { UserInfo } from '@/interfaces/common'

export const useGetVertifyCode = () => {
  const { data, error, loading, run } = useRequest(
    () => request.get<ResponseType<CodeResult>>('/adm-system/user/code'),
    {
      manual: true,
      debounceWait: 300,
    }
  )
  return { data: data, error, loading, run }
}

export const useLoginSubmit = () => {
  const { data, error, loading, runAsync } = useRequest(
    (params: LoginSubmitParams) =>
      request.post<ResponseType<any>>('/adm-system/user/login', params),
    {
      manual: true,
      debounceWait: 300,
    }
  )
  return { data, error, loading, runAsync }
}

export const useGetUserInfo = () => {
  const { data, error, loading, runAsync } = useRequest(
    () => request.get<ResponseType<UserInfo>>('/adm-system/user/userInfo'),
    {
      manual: true,
    }
  )
  return { data, error, loading, runAsync }
}
