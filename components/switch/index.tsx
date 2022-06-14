import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface IProps {
  size?: 'small' | 'smallest'
  type?: 'primary' | 'secondary'
  className?: string
  data?: any
  disabled?: boolean
  checked: boolean
  onChange?: ((evt: any, data?: any) => void) | any
}

const AmSwitch: React.FC<IProps> = (props) => {
  const { size, type, disabled, onChange, checked, data, className } = props

  const onButtonChange = () => {
    if (disabled) {
      return
    }
    if (onChange) {
      if (Taro.vibrateShort) {
        Taro.vibrateShort()
      }

      onChange(!checked, data)
    }
  }

  const classes = cn(
    'am-switch',
    `am-switch--${type}`,
    `am-switch--${size}`,
    {
      'am-switch--checked': checked,
      'am-switch--disabled': disabled,
    },
    className,
  )

  return (
    <Button className={classes} onClick={onButtonChange} hoverClass="am-switch--hover">
      <View className="am-switch__inner">
        <View className="am-switch__dot" />
      </View>
    </Button>
  )
}

AmSwitch.defaultProps = {
  type: 'primary',
  checked: false,
  disabled: false,
}

export default AmSwitch
