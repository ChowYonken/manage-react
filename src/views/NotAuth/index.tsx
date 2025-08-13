import { memo } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import useNProgress from '@/hooks/useNProgress'

const NotAuth = memo(() => {
  const navigate = useNavigate()
  useNProgress()
  const goHome = () => {
    navigate('/', { replace: true })
  }
  return (
    <Result
      status='403'
      title='403'
      subTitle='抱歉，该页面无权限访问'
      extra={
        <Button type='primary' onClick={goHome}>
          返回主页
        </Button>
      }
    />
  )
})

export default NotAuth
