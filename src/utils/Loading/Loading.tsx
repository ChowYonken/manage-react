import { memo } from 'react'
import { Spin } from 'antd'
import LoadingWrapper from './loading'

const Loading = memo(() => {
  return (
    <LoadingWrapper>
      <Spin tip='加载中'>
        <div></div>
      </Spin>
    </LoadingWrapper>
  )
})

export default Loading
