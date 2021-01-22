/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import cn from 'classnames'
import AmPopup from '../popup'

interface IActionSheetItemProps {
  key: string | number
  text: string
  style?: React.CSSProperties
}

interface IProps {
  title?: string
  items: IActionSheetItemProps[]
  visible: boolean
  btnText?: string
  className?: string
  customStyle?: React.CSSProperties
  customItemStyle?: React.CSSProperties
  onBgClick: () => void
  onBtnClick: () => void
  onItemClick: (index: number) => void
}

const AmActionSheet: Taro.FC<IProps> = (props) => {
  const {
    className,
    title,
    visible,
    onBgClick,
    btnText,
    onBtnClick,
    customStyle,
    onItemClick,
    items,
  } = props

  const classes = cn('am-actionsheet', className)

  const onClick = (index: number) => {
    if (!onItemClick) {
      return
    }

    onItemClick(index)
  }

  return (
    <View className="am-actionsheet" style={customStyle}>
      {/** 为什么需要传style进去呢？原因是因为京东不支持外部传入className */}
      <AmPopup
        onBgClick={onBgClick}
        customContentStyle={{
          background: '#eef3f7',
          minHeight: 'auto',
        }}
        height="auto"
        className={classes}
        visible={visible}
      >
        <View className="am-actionsheet__inner">
          {title ? (
            <View className="am-actionsheet__title">
              <Text>{title}</Text>
            </View>
          ) : null}

          <View className="am-actionsheet__list">
            {items.map((item: any, index: number) => (
              <View
                onClick={() => onClick(index)}
                className="am-actionsheet__item"
                key={item.key}
                style={item.style}
              >
                <Text>{item.text}</Text>
              </View>
            ))}
          </View>

          <View className="am-actionsheet__footer">
            <Button onClick={onBtnClick}>{btnText}</Button>
          </View>
        </View>
      </AmPopup>
    </View>
  )
}

AmActionSheet.defaultProps = {
  title: '',
  visible: false,
  btnText: '取消',
  items: [],
}

AmActionSheet.options = {
  addGlobalClass: true,
}

export default AmActionSheet
