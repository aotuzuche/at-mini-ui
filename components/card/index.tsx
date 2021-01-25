import { View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import cn from 'classnames'

interface IProps {
  roundedCorner?: boolean // 圆角
  border?: 'top-bottom' | 'all' // 边框，上下 或 全部
  className?: string
}

const AmCard: Taro.FC<IProps> = (props) => {
  const { roundedCorner, border, className, children } = props

  const classes = cn(
    'am-card',
    {
      'am-card--rounded-corner': roundedCorner,
      'am-card--border-all': border === 'all',
      'am-card--border-t-b': border === 'top-bottom',
    },
    className
  )

  return <View className={classes}>{children}</View>
}

AmCard.options = {
  addGlobalClass: true,
}

export default React.memo(AmCard)
