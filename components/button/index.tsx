import { BaseEventOrig, Button } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import cn from 'classnames'
import React from 'react'

interface IProps {
  type?: 'primary' | 'secondary' | 'danger' | 'default'
  size?: 'small' | 'large' | 'middle'
  className?: string
  lighter?: boolean | 'lighter' | 'white'
  shrink?: boolean
  disabled?: boolean
  capsule?: boolean
  bordered?: boolean
  color?: string
  onClick?: (evt: any, data?: any) => void
  customStyle?: React.CSSProperties
  openType?: ButtonProps.openType
  children: any
  onGetPhoneNumber?: (
    evt: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>
  ) => void
  onGetUserInfo?: (
    evt: BaseEventOrig<ButtonProps.onGetUserInfoEventDetail>
  ) => void
}

const AmButton: React.FC<IProps> = (props) => {
  const {
    disabled,
    onClick,
    size,
    type,
    color,
    lighter,
    shrink,
    capsule,
    bordered,
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

  const canUseLighter =
    type === 'primary' || type === 'secondary' || type === 'danger'

  const classes = cn(
    'am-button',
    `am-button--${size}`,
    {
      [`am-button--${type}`]: !color,
      'am-button--lighter':
        (lighter === true || lighter === 'lighter') && canUseLighter,
      'am-button--white': lighter === 'white' && canUseLighter,
      'am-button--shrink': shrink,
      'am-button--disabled': disabled,
      'am-button--capsule': capsule,
      'am-button--bordered': bordered,
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
  bordered: false,
  capsule: true,
}

export default React.memo(AmButton)
