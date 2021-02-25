import { BaseEventOrig, Button } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface IProps {
  type?: 'primary' | 'secondary' | 'danger' | 'default' | 'bordered'
  size?: 'small' | 'large' | 'middle'
  className?: string
  lighter?: boolean
  shrink?: boolean
  disabled?: boolean
  color?: string
  onClick?: (evt: any, data?: any) => void
  customStyle?: React.CSSProperties
  openType?: ButtonProps.openType
  onGetPhoneNumber?: (
    evt: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>
  ) => void
  onGetUserInfo?: (
    evt: BaseEventOrig<ButtonProps.onGetUserInfoEventDetail>
  ) => void
}

const AmButton: Taro.FC<IProps> = (props) => {
  const {
    disabled,
    onClick,
    size,
    type,
    color,
    lighter,
    shrink,
    className,
    customStyle,
    openType,
    onGetPhoneNumber,
    onGetUserInfo,
    children,
  } = props

  const onBtnClick = (evt: any) => {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick(evt)
    }
  }

  const classes = cn(
    'am-button',
    `am-button--${size}`,
    {
      [`am-button--${type}`]: !color,
      'am-button--lighter':
        lighter &&
        (type === 'primary' || type === 'secondary' || type === 'danger'),
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
      onGetUserInfo={onGetUserInfo}
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
  lighter: false,
}

AmButton.options = {
  addGlobalClass: true,
}

export default React.memo(AmButton)
