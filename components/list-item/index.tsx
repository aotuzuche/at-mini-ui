/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import cn from 'classnames'

interface IListItemProps {
  text: string
  value?: any
  arrow?: boolean
  thumb?: string
  indent?: boolean
  className?: string
  last?: boolean
  extraText?: string
  extraThumb?: string
  onClick?: (value: any) => void
}
const AmListItem: Taro.FC<IListItemProps> = (props: IListItemProps) => {
  const {
    text,
    arrow,
    thumb,
    onClick,
    indent,
    last,
    value,
    extraText,
    extraThumb,
    className,
  } = props
  const classname = cn('am-list-cell', className, {
    'am-list-cell--indent': indent,
    'am-list-cell--last': last,
  })

  const onItemClick = (item: any) => {
    onClick && onClick(item)
  }

  return (
    <View className={classname} onClick={() => onItemClick(value)}>
      <View className="am-list-cell__inner">
        {thumb && <Image className="am-list-cell__thumb" src={thumb} />}
        <View className="am-list-cell__textcontent">
          <Text className="am-list-cell__text">{text}</Text>
          {extraText ? (
            <Text className="am-list-cell__extraText">{extraText}</Text>
          ) : null}
          {extraThumb ? (
            <Image className="am-list-cell__extarThumb" src={extraThumb} />
          ) : null}
        </View>
        {arrow && <View className="am-list-cell__arrow" />}
      </View>
    </View>
  )
}

AmListItem.defaultProps = {
  arrow: false,
  indent: true,
  last: false,
  extraThumb: '',
  value: '',
  extraText: '',
  thumb: '',
  className: '',
  onClick: () => {},
}

AmListItem.options = {
  addGlobalClass: true,
}

export default AmListItem
