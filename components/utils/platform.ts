import Taro from '@tarojs/taro'

const ENV = Taro.getEnv()
const systemInfo: any = Taro.getSystemInfoSync()
// 判断平台
const platform = {
  // 是否为支付宝
  isAlipay: ENV === Taro.ENV_TYPE.ALIPAY,
  // 是否为微信
  isWeapp: ENV === Taro.ENV_TYPE.WEAPP,
  // 是否为京东
  isJD: ENV === Taro.ENV_TYPE.JD,
  // 是否为头条
  isTT: ENV === Taro.ENV_TYPE.TT,
  // 是否为百度
  isSwan: ENV === Taro.ENV_TYPE.SWAN,
  // 是否是UC
  isUC: ENV === Taro.ENV_TYPE.ALIPAY && systemInfo.app === 'UC',
  // 是否是夸克
  isQuark: ENV === Taro.ENV_TYPE.ALIPAY && systemInfo.app === 'QUARK',
}

const getPlatformType = () => {
  if (platform.isAlipay) {
    return 'MINIPROGRAM-ALIPAY'
  }
  if (platform.isWeapp) {
    return 'MINIPROGRAM-WECHAT'
  }
  if (platform.isJD) {
    return 'MINIPROGRAM-JD'
  }
  if (platform.isTT) {
    return 'MINIPROGRAM-TT'
  }
  return 'UNKNOW'
}

const getPlatformSource = () => {
  if (platform.isAlipay) {
    return '203'
  }
  if (platform.isWeapp) {
    return '205'
  }
  if (platform.isTT) {
    return '206'
  }
  if (platform.isJD) {
    return '207'
  }
  return ''
}

export const platformType = getPlatformType()

export const platformSource = getPlatformSource()

export default platform
