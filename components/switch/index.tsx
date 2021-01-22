import React from 'react'
import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'

interface IProps {
  size?: 'small'
  className?: string
  data?: any
  disabled?: boolean
  checked: boolean
  onChange?: ((evt: any, data?: any) => void) | any
}

const AmSwitch: Taro.FC<IProps> = (props) => {
  const { size, disabled, onChange, checked, data, className } = props

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
    {
      'am-switch--small': size === 'small',
      'am-switch--checked': checked,
      'am-switch--disabled': disabled,
    },
    className
  )

  return (
    <Button
      className={classes}
      onClick={onButtonChange}
      hoverClass="am-switch--hover"
    >
      <View className="am-switch__dot" />
    </Button>
  )
}

AmSwitch.defaultProps = {
  checked: false,
  disabled: false,
}

AmSwitch.options = {
  addGlobalClass: true,
}

export default React.memo(AmSwitch)
