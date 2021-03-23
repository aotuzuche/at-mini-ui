import { Text, View } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'

interface IProps {
  value?: any
  arrow?: boolean
  onClick?: (value?: any) => void
  activable?: boolean
  className?: string
  children?: React.ReactNode
  title?: string
  dividerIndent?: 'left' | 'both'
}

const AmCellRow: React.FC<IProps> = (props) => {
  const {
    value,
    arrow,
    onClick,
    activable,
    className,
    children,
    title,
    dividerIndent,
  } = props

  const composeClassName = cn('am-cell__row', className, {
    'am-cell__row--activable': onClick || activable,
    'am-cell__row--arrow': arrow,
    'am-cell__row--divider-indent-left': dividerIndent === 'left',
    'am-cell__row--divider-indent-both': dividerIndent === 'both',
  })

  const onRowClick = () => {
    onClick && onClick(value)
  }

  return (
    <View className={composeClassName} onClick={onRowClick}>
      {title && <Text className="am-cell__title">{title}</Text>}
      {children}
      {arrow && <View className="am-cell__arrow" />}
    </View>
  )
}

export default AmCellRow
