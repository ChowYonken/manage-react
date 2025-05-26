import { memo } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = memo(() => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
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
