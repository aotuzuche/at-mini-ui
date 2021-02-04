import { Input, View } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'
import Taro from '@tarojs/taro'
import cn from 'classnames'
import React from 'react'

interface IProps {
  id?: string
  border?: boolean
  className?: string
  clear?: boolean
  customStyle?: React.CSSProperties
  onChange: (e: any) => void
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onConfirm?: (e: any) => void
  onKeyboardHeightChange?: (e: any) => void
}

const AmInput: Taro.FC<IProps & InputProps> = (props) => {
  const {
    id,
    type,
    name,
    value,
    className,
    placeholder,
    maxlength,
    autoFocus,
    password,
    placeholderStyle,
    onChange,
    onFocus,
    onBlur,
    border,
    clear,
    onKeyboardHeightChange,
    onConfirm,
    customStyle,
  } = props

  const rootClass = cn('am-input', className, {
    'am-input--border': border,
  })

  const handleInput = (event: any) => {
    onChange(event.detail.value)
  }

  const onInputClear = () => {
    onChange('')
  }

  const handleFocus = (event: any): void => {
    if (typeof onFocus === 'function') {
      onFocus(event.detail.value)
    }
  }

  const handleBlur = (event: any): void => {
    if (typeof onBlur === 'function') {
      onBlur(event.detail.value)
    }
  }

  const handleKeyboardHeightChange = (event: any): void => {
    if (typeof onKeyboardHeightChange === 'function') {
      onKeyboardHeightChange(event)
    }
  }

  const handleConfirm = (event: any): void => {
    if (typeof onConfirm === 'function') {
      onConfirm(event.detail.value)
    }
  }

  return (
    <View className={rootClass} style={customStyle}>
      <Input
        className={cn('am-input__input', {
          'am-input__padding': clear,
        })}
        id={id}
        name={name}
        type={type}
        value={value}
        password={password}
        placeholderStyle={placeholderStyle}
        placeholder={placeholder}
        maxlength={maxlength}
        focus={autoFocus}
        adjustPosition
        onInput={handleInput}
        cursorSpacing={50}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onConfirm={handleConfirm}
        onKeyboardHeightChange={handleKeyboardHeightChange}
      />

      {clear && value && (
        <View className="am-input__clear" onClick={onInputClear} />
      )}
    </View>
  )
}

AmInput.options = {
  addGlobalClass: true,
}

AmInput.defaultProps = {
  className: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  cursorSpacing: 50,
  confirmType: 'search',
  cursor: 0,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  clear: true,
  autoFocus: false,
  focus: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
  onClick: () => {},
}

export default AmInput
