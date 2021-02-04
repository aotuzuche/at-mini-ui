import { ScrollView, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import AmList from '../list'
import AmListItem from '../list-item'

interface Item {
  name: string
  code: string
  [propName: string]: any
}

interface ListItem {
  title: string
  key: string
  items: Array<Item>
}

interface IProps {
  className?: string
  topKey?: string
  list: Array<ListItem>
  hotList?: Array<any>
  menuList?: Array<string>
  onClick: (item: Item) => void
}

const systemInfo: any = Taro.getSystemInfoSync()

// 这里有bug
const DISTANCE = 8 * (systemInfo.pixelRatio || 3)
let lastMenuIndex = -1
let clientY = 0

const AmIndexes: Taro.FC<IProps> = (props: IProps) => {
  const [touch, setTouch] = useState(false)
  const [scrollIntoViewId, setScrollIntoViewId] = useState('')
  const [currentLetter, setCurrentLetter] = useState('')
  const menuRef: any = useRef(null)
  const timeRef: any = useRef(null)
  const {
    list,
    topKey,
    onClick,
    menuList = [],
    hotList = [],
    className,
  } = props

  const findElement = (index: number) => {
    if (timeRef.current) {
      setCurrentLetter('')
      clearTimeout(timeRef.current)
    }

    const letter = index === 0 ? 'hot' : menuList[index - 1]
    setScrollIntoViewId(`am-indexes__block--${letter}`)
    setCurrentLetter(letter === 'hot' ? '热' : letter)

    timeRef.current = setTimeout(() => {
      setCurrentLetter('')
    }, 1000)
  }

  const onCitySelectClick = (item: Item) => {
    if (!onClick) {
      return
    }
    onClick(item)
  }

  const onIndexesTouchStart = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setTouch(true)
    lastMenuIndex = Math.floor(e.target.offsetTop / DISTANCE)
    clientY = e.touches[0].clientY
  }

  const onIndexesTouchMove = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setTouch(true)

    lastMenuIndex = Math.floor(
      Math.abs(e.target.offsetTop + e.touches[0].clientY - clientY) / DISTANCE
    )

    if (lastMenuIndex > menuList.length) {
      lastMenuIndex = menuList.length
    } else if (lastMenuIndex < 0) {
      lastMenuIndex = 0
    }
    findElement(lastMenuIndex)
  }

  const onReset = () => {
    lastMenuIndex = -1
    clientY = 0
  }

  const onIndexesTouchEnd = () => {
    setTouch(false)
    findElement(lastMenuIndex)
    onReset()
  }

  const classname = cn('am-indexes', className, {
    'am-indexes--touching': touch,
  })

  return (
    <View className={classname}>
      {menuList.length > 0 && (
        <View
          className="am-indexes__menu"
          onTouchStart={onIndexesTouchStart}
          onTouchEnd={onIndexesTouchEnd}
          onTouchMove={onIndexesTouchMove}
          ref={menuRef}
        >
          {topKey && (
            <View className="am-indexes__menu-item" style={{ height: '24px' }}>
              {topKey}
            </View>
          )}
          {menuList.map((item) => (
            <View
              key={item}
              className="am-indexes__menu-item"
              style={{ height: '24px' }}
            >
              {item}
            </View>
          ))}
        </View>
      )}

      {currentLetter && (
        <View className="am-indexes__toast">{currentLetter}</View>
      )}

      <ScrollView
        scrollY
        scrollIntoView={scrollIntoViewId}
        className="am-indexes__scroller"
      >
        {hotList.length > 0 && (
          <View className="am-indexes__hotcity" id="am-indexes__block--hot">
            <View className="am-indexes__title">热门城市</View>
            <View className="am-indexes__hotlist">
              {hotList.map((item) => (
                <View key={item.code} className="am-indexes__hotlistwrap">
                  <View
                    className="am-indexes__hotlistitem"
                    onClick={() => onCitySelectClick(item)}
                  >
                    {item.name}
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        <View className="am-indexes__content">
          {list.map((city) => {
            const { key, title, items } = city
            return (
              <View
                id={`am-indexes__block--${key}`}
                className="am-indexes__block"
                key={key}
              >
                <View className="am-indexes__title">{title}</View>
                <AmList>
                  {items.map((cell, index) => {
                    if (index === city.items.length - 1) {
                      return (
                        <AmListItem
                          text={cell.name}
                          key={cell.code}
                          value={cell}
                          onClick={onCitySelectClick}
                        />
                      )
                    }
                    return (
                      <AmListItem
                        text={cell.name}
                        key={cell.code}
                        value={cell}
                        onClick={onCitySelectClick}
                      />
                    )
                  })}
                </AmList>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

AmIndexes.defaultProps = {
  topKey: '热',
  className: '',
  hotList: [],
  menuList: [],
}

AmIndexes.options = {
  addGlobalClass: true,
}

export default AmIndexes
