import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cn from 'classnames'

interface IProps {
  className?: string
}

const AmDivider: Taro.FC<IProps> = (props) => {
  const { className } = props
  const classes = cn('am-divider', className)

  return <View className={classes} />
}

AmDivider.options = {
  addGlobalClass: true,
}

export default React.memo(AmDivider)
