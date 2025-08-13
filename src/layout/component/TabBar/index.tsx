import style from '../../index.module.less'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div>Tab 1</div>,
  },
  {
    key: '2',
    label: 'Tab 2',
  },
  {
    key: '3',
    label: 'Tab 3',
  },
]

const tabStyle = {
  height: 38,
}

const TabBar = () => {
  const onChange = (key: string) => {
    console.log(key, 'tab====')
  }
  return (
    <div className={style.tabHeader}>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} tabBarStyle={tabStyle} />
    </div>
  )
}

export default TabBar
