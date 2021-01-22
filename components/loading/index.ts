import { hideLoading, hideToast, showLoading } from '@tarojs/taro'

type ILoading = ((text?: string, mask?: boolean) => void) & { hide: () => void }

const AmLoading: ILoading = (text, mask = true) => {
  hideToast()
  if (text) {
    showLoading({ title: text, mask })
  } else {
    showLoading({ title: '加载中...', mask })
  }
}

AmLoading.hide = () => {
  hideLoading()
}

export default AmLoading
