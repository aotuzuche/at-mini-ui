import React from 'react'
import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'

interface ITab {
  title: string
  key: number
}

interface IProps {
  tabs: ITab[]
  active: number
  onClick: (index: number) => void
  className?: string
}

const AmTabs: Taro.FC<IProps> = (props) => {
  const { className, onClick, tabs, active } = props

  const classes = cn('am-tabs', className)

  const onButtonClick = (tab: ITab) => {
    if (tab && tab.key !== active) {
      onClick(tab.key)
    }
  }

  return (
    <View className={classes}>
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => onButtonClick(tab)}
          className={cn('am-tabs__item', {
            'am-tabs--active': tab.key === active,
          })}
          hoverClass="hover"
        >
          {tab.title}
        </Button>
      ))}
    </View>
  )
}

AmTabs.defaultProps = {
  tabs: [],
}

AmTabs.options = {
  addGlobalClass: true,
}

export default Taro.memo(AmTabs)
