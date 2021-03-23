import { View } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'

interface IProps {
  wrapperBorder?: boolean
  arrow?: boolean
  dividerIndent?: 'left' | 'both'
  onClick?: (value?: any) => void
  className?: string
}

const AmCell: React.FC<IProps> = (props) => {
  const { className, wrapperBorder, arrow, onClick, dividerIndent, children } = props

  const composeChildren: any[] = React.Children.toArray(children)

  return (
    <View className={cn('am-cell', className)}>
      {wrapperBorder && <View className="am-cell-border am-cell-border--top" />}
      {composeChildren.map((child) => {
        if (child && child.type && child.type.name === 'AmCellRow') {
          return React.cloneElement(child, {
            key: child.key,
            arrow: child.props.arrow === false ? false : arrow || child.props.arrow,
            onClick: child.props.href || child.props.to ? null : onClick || child.props.onClick,
            dividerIndent,
          })
        }
        return child
      })}
      {wrapperBorder && <View className="am-cell-border am-cell-border--bottom" />}
    </View>
  )
}

AmCell.defaultProps = {
  wrapperBorder: true,
}

export default AmCell
