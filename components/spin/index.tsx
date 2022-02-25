import { Text, View } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'

interface IProps {
  className?: string
  local?: boolean
  color?: 'green' | 'white'
  size?: 'small' | 'large' | 'middle'
  customStyle?: React.CSSProperties
}

const AmSpin: React.FC<IProps> = (props: IProps) => {
  const { className, customStyle, local, color, size } = props
  const composeClassName = cn(
    'am-spin',
    `am-spin--${size}`,
    {
      'am-spin--white': color === 'white',
      'am-spin--local': local,
    },
    className,
  )
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
  local: false,
  color: 'green',
  size: 'large',
}

export default AmSpin
