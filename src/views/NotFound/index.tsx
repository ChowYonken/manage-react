import { memo } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import useNProgress from '@/hooks/useNProgress'

const NotFound = memo(() => {
  const navigate = useNavigate()
  useNProgress()
  const goHome = () => {
    navigate('/', { replace: true })
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='抱歉，该地址无法访问页面'
      extra={
        <Button type='primary' onClick={goHome}>
          返回主页
        </Button>
      }
    />
  )
})

export default NotFound
