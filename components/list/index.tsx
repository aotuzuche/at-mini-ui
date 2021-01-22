import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cn from 'classnames'

interface IListProps {
  border?: boolean
  className?: string
}

const AmList: Taro.FC<IListProps> = (props) => {
  const { className, border, children } = props
  const classname = cn('am-list', className, {
    'am-list--border': border,
  })

  return <View className={classname}>{children}</View>
}

AmList.defaultProps = {
  border: true,
}

AmList.options = {
  addGlobalClass: true,
}

export default AmList
