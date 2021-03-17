import { Block, ScrollView, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import AmButton from '../button'

interface IProps {
  visible?: boolean
  className?: string
  direction?: 'top' | 'left' | 'right' | 'bottom'
  transparent?: boolean
  size?: number | string
  height?: number | string
  local?: boolean
  onBgClick?: () => void
  title?: string
  onClose?: () => void
  footerBtnText?: string
  useBorderRadius?: boolean
  onFooterBtnClick?: () => void
  customStyle?: React.CSSProperties
  customContentStyle?: React.CSSProperties
}

const AmPopup: Taro.FC<IProps> = (props) => {
  const {
    visible,
    size,
    height,
    className,
    useBorderRadius,
    transparent,
    local,
    customStyle,
    direction,
    onBgClick,
    customContentStyle,
    onClose,
    title,
    children,
    onFooterBtnClick,
    footerBtnText,
  } = props
  const [display, setDisplay] = useState('none')
  const [popVisible, setPopVisible] = useState(false)
  const timeoutRef1 = useRef<any>()
  const timeoutRef2 = useRef<any>()

  useEffect(() => {
    clearTimeout(timeoutRef1.current)
    clearTimeout(timeoutRef2.current)
    if (props.visible) {
      timeoutRef1.current = setTimeout(() => setPopVisible(true), 16)
      setDisplay('block')
    } else {
      setPopVisible(false)
      timeoutRef2.current = setTimeout(() => setDisplay('none'), 250)
    }
  }, [visible])

  const style: any = {}
  const sizeOrHeight = size || height
  if (sizeOrHeight) {
    const unit =
      typeof sizeOrHeight === 'number' ? `${sizeOrHeight}%` : sizeOrHeight
    if (direction === 'left' || direction === 'right') {
      style.width = unit
    } else if (direction === 'top' || direction === 'bottom') {
      style.height = unit
    }
  }

  return (
    <View>
      {display === 'none' ? (
        <Block />
      ) : (
        <View
          style={{ ...customStyle }}
          className={cn(
            'am-popup',
            `am-popup--${direction}`,
            {
              'am-popup--visible': popVisible,
              'am-popup--transparent': transparent,
              'am-popup--local': local,
              'am-popup--border-radius': useBorderRadius,
            },
            className
          )}
        >
          <View className="am-popup__bg" onClick={onBgClick} />
          <View
            className="am-popup__inner"
            style={{ ...style, ...customContentStyle }}
          >
            {title && (
              <View className="am-popup__header">
                <View
                  className={cn({ 'am-popup__header--close': !!onClose })}
                  onClick={onClose}
                />
                <View className="am-popup__header--title">{title}</View>
              </View>
            )}
            <ScrollView scrollY className="am-popup__content">
              {children}
            </ScrollView>
            <View
              className={cn('am-popup__footer', {
                show: !!onFooterBtnClick,
              })}
            >
              <AmButton type="primary" onClick={onFooterBtnClick}>
                {footerBtnText}
              </AmButton>
            </View>
            <View className="am-safe-area" />
          </View>
        </View>
      )}
    </View>
  )
}

AmPopup.defaultProps = {
  visible: false,
  direction: 'top',
  transparent: false,
  local: false,
  title: '',
  footerBtnText: '完成',
}

AmPopup.options = {
  addGlobalClass: true,
}

export default React.memo(AmPopup)
