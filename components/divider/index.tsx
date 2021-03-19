import React from 'react'
import { View } from '@tarojs/components'
import cn from 'classnames'

interface IProps {
  className?: string
}

const AmDivider: React.FC<IProps> = (props) => {
  const { className } = props
  const classes = cn('am-divider', className)

  return <View className={classes} />
}

export default React.memo(AmDivider)
