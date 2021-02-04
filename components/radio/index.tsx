import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface IProps {
  checked: boolean
  type?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
  text?: string
  customStyle?: React.CSSProperties
  onChange?: (checked: boolean) => void
}

const AmRadio: Taro.FC<IProps> = (props) => {
  const {
    type,
    text,
    checked,
    disabled,
    className,
    onChange,
    customStyle,
  } = props
  const composeClassName = cn(
    'am-radio',
    `am-radio--${type}`,
    { 'am-radio--checked': checked, 'am-radio--disabled': disabled },
    className
  )

  return (
    <View
      className={composeClassName}
      onClick={() => {
        onChange && onChange(!checked)
      }}
      style={customStyle}
    >
      <View className="am-radio__icon">
        <View className="am-radio__checker" />
      </View>
      {text ? <Text className="am-radio__text">{text}</Text> : <View />}
    </View>
  )
}

AmRadio.defaultProps = {
  checked: false,
  type: 'primary',
  text: '',
  onChange: () => {},
  disabled: false,
}

AmRadio.options = {
  addGlobalClass: true,
}

export default AmRadio
