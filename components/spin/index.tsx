import React from 'react'
import { View, Text } from '@tarojs/components'
import cn from 'classnames'

interface IProps {
  className?: string
  customStyle?: React.CSSProperties
}

const AmSpin: React.FC<IProps> = (props: IProps) => {
  const { className, customStyle } = props
  const composeClassName = cn('am-spin', className)
  return (
    <View className={composeClassName} style={customStyle}>
      <View className="am-spin__inner">
        <Text className="am-spin__item am-spin__item--1" />
        <Text className="am-spin__item am-spin__item--2" />
        <Text className="am-spin__item am-spin__item--3" />
      </View>
    </View>
  )
}

AmSpin.defaultProps = {
  customStyle: {},
  className: '',
}

export default React.memo(AmSpin)
