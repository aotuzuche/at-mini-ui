import { Block, Text, View } from '@tarojs/components'
import cn from 'classnames'
import React from 'react'
import Spin from '../spin'

interface IProps {
  pageNum?: number
  totalPage?: number
  hasNext?: boolean
  className?: string
  customStyle?: React.CSSProperties
}

const AmLoadMore: React.FC<IProps> = (props: IProps) => {
  const { totalPage, pageNum, className, customStyle, hasNext } = props
  const classname = cn('am-load-more', className)

  if (hasNext) {
    return (
      <View className={classname} style={customStyle}>
        <Spin customStyle={{ position: 'absolute' }} />
      </View>
    )
  }

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
  hasNext: false,
  totalPage: 1,
  pageNum: 1,
}

export default AmLoadMore
