import { Block, ScrollView, View } from '@tarojs/components'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import AmButton from '../button'

interface IProps {
  visible?: boolean
  children: any
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
  rightText?: string
  onRightTextClick?: () => void
  useSafeArea?: boolean
  noScrollY?: boolean
}

const AmPopup: React.FC<IProps> = (props) => {
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
    rightText,
    onRightTextClick,
    noScrollY = false,
    useSafeArea,
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
    const unit = typeof sizeOrHeight === 'number' ? `${sizeOrHeight}%` : sizeOrHeight
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
            className,
          )}
        >
          <View className="am-popup__bg" onClick={onBgClick} />
          <View className="am-popup__inner" style={{ ...style, ...customContentStyle }}>
            {title && (
              <View className="am-popup__header">
                {onClose && (
                  <View className={cn({ 'am-popup__header-close': !!onClose })} onClick={onClose} />
                )}
                {title && <View className="am-popup__header-title">{title}</View>}
                {rightText && (
                  <View className="am-popup__header-right" onClick={onRightTextClick}>
                    {rightText}
                  </View>
                )}
              </View>
            )}
            <ScrollView scrollY={!noScrollY} scrollX={false} className="am-popup__content">
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

            {useSafeArea && direction === 'top' && <View className="am-safe-area" />}
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
  useBorderRadius: true,
  useSafeArea: true,
  noScrollY: false,
}

export default React.memo(AmPopup)
