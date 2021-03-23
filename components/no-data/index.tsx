import { View, Text } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'

interface IProps {
  className?: string
}

const AmList: React.FC<IProps> = (props) => {
  const { className, children = '暂无数据' } = props
  const classname = cn('am-nodata', className)

  return (
    <View className={classname}>
      <View className="w">
        <View className="icon" />
        <Text className="text">{children}</Text>
      </View>
    </View>
  )
}

export default AmList
