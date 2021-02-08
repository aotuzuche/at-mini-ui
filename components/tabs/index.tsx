import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface ITab {
  label: string
  value: string | number
}

interface IProps {
  tabs: ITab[]
  active: string | number
  type?: 'primary' | 'secondary'
  onClick: (index: string | number) => void
  className?: string
}

const AmTabs: Taro.FC<IProps> = (props) => {
  const { className, type, onClick, tabs, active } = props

  const classes = cn('am-tabs', `am-tabs--${type}`, className)

  const onButtonClick = (tab: ITab) => {
    if (tab && tab.value !== active) {
      onClick(tab.value)
    }
  }

  return (
    <View className={classes}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => onButtonClick(tab)}
          className={cn('am-tabs__item', {
            'am-tabs--active': tab.value === active,
          })}
          hoverClass="hover"
        >
          {tab.label}
          <View className="am-tabs__line" />
        </Button>
      ))}
    </View>
  )
}

AmTabs.defaultProps = {
  tabs: [],
  type: 'primary',
}

AmTabs.options = {
  addGlobalClass: true,
}

export default React.memo(AmTabs)
