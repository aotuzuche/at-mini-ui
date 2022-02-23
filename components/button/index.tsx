import { BaseEventOrig, Button, Form } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

const ENV = Taro.getEnv()

interface IProps {
  type?: 'primary' | 'secondary' | 'danger' | 'default'
  size?: 'small' | 'large' | 'middle'
  hoverClass?: string
  className?: string
  lighter?: boolean | 'lighter' | 'white'
  shrink?: boolean
  disabled?: boolean
  capsule?: boolean
  bordered?: boolean
  color?: string
  onClick?: (evt: any, data?: any) => void
  customStyle?: React.CSSProperties
  openType?: any
  onReportFormID?: (evt: any) => void
  children?: any
  onGetPhoneNumber?: (evt: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>) => void
  onGetUserInfo?: (evt: BaseEventOrig<ButtonProps.onGetUserInfoEventDetail>) => void
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
    onReportFormID,
    children,
    hoverClass,
  } = props

  const onBtnClick = (evt: any) => {
    if (disabled) {
      return
    }
    if (onClick) {
      onClick(evt)
    }
  }

  const canUseLighter = type === 'primary' || type === 'secondary' || type === 'danger'

  const classes = cn(
    'am-button',
    `am-button--${size}`,
    {
      [`am-button--${type}`]: !color,
      'am-button--lighter': (lighter === true || lighter === 'lighter') && canUseLighter,
      'am-button--white': lighter === 'white' && canUseLighter,
      'am-button--shrink': shrink,
      'am-button--disabled': disabled,
      'am-button--capsule': capsule,
      'am-button--bordered': bordered,
    },
    className,
  )

  // 打开reportFormID并且只有在微信和支付宝的情况下才可使用
  const needReport = onReportFormID && (ENV === Taro.ENV_TYPE.WEAPP || ENV === Taro.ENV_TYPE.ALIPAY)

  const btn = (
    <Button
      formType={needReport ? 'submit' : undefined}
      className={classes}
      style={color ? { backgroundColor: color, ...customStyle } : { ...customStyle }}
      onClick={onBtnClick}
      hoverClass={hoverClass}
      openType={openType as any}
      onGetPhoneNumber={onGetPhoneNumber}
      onGetUserInfo={onGetUserInfo}
    >
      {children}
    </Button>
  )

  if (needReport) {
    return (
      <Form onSubmit={onReportFormID} reportSubmit={needReport}>
        {btn}
      </Form>
    )
  }

  return btn
}

AmButton.defaultProps = {
  type: 'default',
  size: 'middle',
  shrink: false,
  disabled: false,
  lighter: false,
  bordered: false,
  capsule: true,
  hoverClass: 'am-button--hover',
}

export default React.memo(AmButton)
