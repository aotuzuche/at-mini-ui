import React from 'react'
import { Button } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import Taro from '@tarojs/taro'
import cn from 'classnames'

interface IProps {
  type?: 'primary' | 'lighter' | 'danger' | 'default' | 'bordered'
  size?: 'small' | 'large' | 'middle'
  className?: string
  data?: any
  shrink?: boolean
  disabled?: boolean
  color?: string
  onClick?: (evt: any, data?: any) => void
  customStyle?: React.CSSProperties
  openType?: keyof ButtonProps.openType
  reportFormID?: boolean
  onGetPhoneNumber?: (res: any) => any
}

const AmButton: Taro.FC<IProps> = (props) => {
  const {
    disabled,
    onClick,
    data,
    size,
    type,
    color,
    shrink,
    className,
    customStyle,
    openType,
    onGetPhoneNumber,
    children,
  } = props

  const onBtnClick = (evt: any) => {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick(evt, data)
    }
  }

  const classes = cn(
    'am-button',
    `am-button--${size}`,
    {
      [`am-button--${type}`]: !color,
      'am-button--shrink': shrink,
      'am-button--disabled': disabled,
    },
    className
  )

  return (
    <Button
      className={classes}
      style={
        color ? { backgroundColor: color, ...customStyle } : { ...customStyle }
      }
      onClick={onBtnClick}
      hoverClass="am-button--hover"
      openType={openType as any}
      onGetPhoneNumber={onGetPhoneNumber}
    >
      {children}
    </Button>
  )
}

AmButton.defaultProps = {
  type: 'default',
  size: 'middle',
  shrink: false,
  disabled: false,
}

AmButton.options = {
  addGlobalClass: true,
}

export default React.memo(AmButton)
