import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { useState, useEffect } from 'react'
import { useLocation, useMatches } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()
  const matches = useMatches()
  const [breadcrumbItems, setBreadcrumbItems] = useState<IBreadcrumbItem[]>([])
  useEffect(() => {
    console.log(location, matches, '====location====')
  }, [location, matches])
  return (
    <>
      <AntdBreadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'An Application',
          },
        ]}
      ></AntdBreadcrumb>
    </>
  )
}

export default Breadcrumb
