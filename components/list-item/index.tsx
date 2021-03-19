import { Image, Text, View } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'

interface IListItemProps {
  text: string
  value?: any
  arrow?: boolean
  thumb?: string
  indent?: boolean
  className?: string
  extraText?: string
  extraThumb?: string
  onClick?: (value: any) => void
}
const AmListItem: React.FC<IListItemProps> = (props: IListItemProps) => {
  const {
    text,
    arrow,
    thumb,
    onClick,
    indent,
    value,
    extraText,
    extraThumb,
    className,
  } = props
  const classname = cn('am-list-cell', className, {
    'am-list-cell--indent': indent,
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
            <Text className="am-list-cell__extra-text">{extraText}</Text>
          ) : null}
          {extraThumb ? (
            <Image className="am-list-cell__extar-thumb" src={extraThumb} />
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
  extraThumb: '',
  value: '',
  extraText: '',
  thumb: '',
  className: '',
  onClick: () => {},
}

export default AmListItem
