import Taro from '@tarojs/taro'

interface IProps {
  title?: string
  content: string
  ok?: string
  cancel?: string
}

const AmAlert = (props: IProps | string) =>
  new Promise<boolean>((resolve) => {
    let p: IProps = { content: '' }
    if (typeof props === 'string') {
      p = {
        title: '',
        content: props,
        cancel: '',
        ok: '确定',
      }
    } else {
      p = props
    }
    Taro.showModal({
      title: p.title || '',
      content: p.content,
      showCancel: !!p.cancel,
      cancelText: p.cancel || '',
      cancelColor: '#999999',
      confirmText: p.ok || '确定',
      confirmColor: '#00bc93',
      fail: () => {
        resolve(false)
      },
      success: (res: any) => {
        if (res && res.success === true) {
          resolve(true)
          return
        }

        if (!Object.keys(res).length) {
          resolve(true)
          return
        }
        resolve(!!res.confirm)
      },
    })
  })

export default AmAlert
