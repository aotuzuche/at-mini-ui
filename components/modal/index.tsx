import React, { useRef, useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cn from 'classnames'

interface IProps {
  visible: boolean
  className?: string
  maxWidth?: number
  maxHeight?: number
  onBgClick?: () => void
  customStyle?: React.CSSProperties
  title?: string
}

const AmModal: Taro.FC<IProps> = (props) => {
  const [animation, setAnimation] = useState(false)
  const timeRef = useRef<any>()
  const {
    maxWidth,
    maxHeight,
    className,
    customStyle,
    visible,
    onBgClick,
    children,
  } = props

  useEffect(() => {
    if (visible === true) {
      timeRef.current = setTimeout(() => {
        setAnimation(true)
      }, 100)
    } else {
      setAnimation(false)
    }

    return () => {
      clearTimeout(timeRef.current)
    }
  }, [visible])

  const bodyStyles = {
    maxWidth: `${maxWidth}%`,
    maxHeight: `${maxHeight}%`,
  }

  const classes = cn('am-modal', className, {
    'am-modal--show': visible,
    'am-modal--animation': animation,
  })

  return (
    <View className={classes} style={customStyle}>
      <View className="am-modal__bg" onClick={onBgClick} />
      <View className="am-modal__inner" style={bodyStyles}>
        {children}
      </View>
    </View>
  )
}

AmModal.defaultProps = {
  visible: false,
  maxWidth: 80,
  maxHeight: 70,
}

AmModal.options = {
  addGlobalClass: true,
}

export default AmModal
