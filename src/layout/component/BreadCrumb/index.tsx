import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { memo } from 'react'
import { useMatches } from 'react-router-dom'

const Breadcrumb = memo(() => {
  const matches = useMatches()
  const crumbs = matches
    ?.filter(match => Boolean((match.handle as any)?.crumb))
    ?.map(match => ({ title: (match.handle as any).crumb(match.data) }))

  return (
    <>
      <AntdBreadcrumb items={crumbs}></AntdBreadcrumb>
    </>
  )
})

export default Breadcrumb
