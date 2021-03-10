import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cn from 'classnames'
import AmInput from '../input'

interface IProps {
  placeholder?: string
  actionName?: string
  autoFocus?: boolean
  maxLength?: number
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onAction?: () => void
  disabled?: boolean
  className?: string
}

const AmSearchBar: Taro.FC<IProps> = (props) => {
  const {
    placeholder,
    actionName,
    autoFocus,
    onChange,
    onFocus,
    onBlur,
    onAction,
    disabled,
    className,
  } = props
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  const onSearchBarFocus = () => {
    setFocus(true)
    onFocus && onFocus()
  }

  const onSearchBarBlur = () => {
    setFocus(false)
    onBlur && onBlur()
  }

  const onSearchBarChange = (content: any) => {
    setValue(content)
    onChange && onChange(content)
  }

  const onSearchBarClear = () => {
    setValue('')
    onChange && onChange('')
  }

  const onSearchBarAction = () => {
    onSearchBarClear()
    onAction && onAction()
  }

  const classname = cn(
    'am-search-bar',
    {
      'am-search-bar--focus': focus,
      'am-search-bar--disabled': disabled,
    },
    className
  )

  return (
    <View className={classname}>
      <View className="am-search-bar__content">
        <View className="am-search-bar__input">
          <AmInput
            placeholder={placeholder}
            value={value}
            autoFocus={autoFocus}
            onFocus={onSearchBarFocus}
            onBlur={onSearchBarBlur}
            onChange={onSearchBarChange}
            border={false}
            customStyle={{ backgroundColor: 'transparent' }}
            clear
          />
        </View>
      </View>
      {actionName ? (
        <View className="am-search-bar__actions" onClick={onSearchBarAction}>
          {actionName}
        </View>
      ) : null}
    </View>
  )
}

AmSearchBar.defaultProps = {
  actionName: '',
  maxLength: 100,
}

AmSearchBar.options = {
  addGlobalClass: true,
}

export default AmSearchBar
