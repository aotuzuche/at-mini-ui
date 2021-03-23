import React from 'react'
import { View, Text, Block } from '@tarojs/components'
import cn from 'classnames'
import Spin from '../spin'

interface IProps {
  pageNum: number
  totalPage: number
  className?: string
  customStyle?: React.CSSProperties
}

const AmLoadMore: React.FC<IProps> = (props: IProps) => {
  const { totalPage, pageNum, className, customStyle } = props
  const classname = cn('am-load-more', className)
  if (!totalPage || !pageNum || totalPage <= 1) {
    // 修复return null的时候不执行
    return <Block />
  }
  return (
    <View className={classname} style={customStyle}>
      {pageNum >= totalPage ? (
        <Text>已经到底了</Text>
      ) : (
        <Spin customStyle={{ position: 'absolute' }} />
      )}
    </View>
  )
}

AmLoadMore.defaultProps = {
  className: '',
  customStyle: {},
}

export default AmLoadMore
