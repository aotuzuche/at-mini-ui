import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface IListProps {
  border?: boolean
  className?: string
}

const AmList: Taro.FC<IListProps> = (props) => {
  const { className, border, children } = props
  const classname = cn('am-list', className)

  return (
    <View className={classname}>
      {border && <View className="am-list-border am-list-border--top" />}
      {children}
      {border && <View className="am-list-border am-list-border--bottom" />}
    </View>
  )
}

AmList.defaultProps = {
  border: true,
}

AmList.options = {
  addGlobalClass: true,
}

export default AmList
