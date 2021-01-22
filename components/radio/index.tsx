/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'

interface IProps {
  checked: boolean
  disabled?: boolean
  className?: string
  text?: string
  customStyle?: React.CSSProperties
  onChange?: () => void
}

const AmRadio: Taro.FC<IProps> = (props) => {
  const { text, checked, disabled, className, onChange, customStyle } = props
  const composeClassName = cn(
    'am-radio',
    {
      'am-radio__checked': checked,
      'am-radio__disabled': disabled,
    },
    className
  )

  return (
    <View className={composeClassName} onClick={onChange} style={customStyle}>
      <View className="am-radio__icon" />
      {text ? <Text className="am-radio__text">{text}</Text> : <View />}
    </View>
  )
}

AmRadio.defaultProps = {
  checked: false,
  text: '',
  onChange: () => {},
  disabled: false,
}

AmRadio.options = {
  addGlobalClass: true,
}

export default AmRadio
