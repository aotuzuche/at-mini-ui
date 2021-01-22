/* eslint-disable no-void */
import Taro from '@tarojs/taro'

let timer: any = void 0

const AmToast = (text: string) => {
  Taro.hideLoading()
  clearTimeout(timer)
  timer = setTimeout(() => {
    Taro.showToast({ title: text, icon: 'none' })
  }, 16)
}

export default AmToast
