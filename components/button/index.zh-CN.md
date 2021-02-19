---
group:
  title: 基础组件
  path:
---

# Button

按钮

## 参数

| 参数             |               说明 |                                                                         类型                                                                          |  默认值   | 版本 |
| :--------------- | -----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: | :--: |
| type             |           按钮类型 |                                                   `primary` `lighter` `danger` `default` `bordered`                                                   | `default` |      |
| size             |               大小 |                                                               `large` `middle` `small`                                                                | `middle`  |      |
| className        |           样式名称 |                                                           <font color=#c41d7f>string</font>                                                           |     -     |
| shrink           |               收缩 |                                                          <font color=#c41d7f>boolean</font>                                                           |  `false`  |
| disabled         |               禁用 |                                                          <font color=#c41d7f>boolean</font>                                                           |  `false`  |
| color            |         按钮背景色 |                                                           <font color=#c41d7f>string</font>                                                           |     -     |
| customStyle      |              style |                                                           <font color=#c41d7f>object</font>                                                           |     -     |
| openType         |           样式名称 | `contact` `share` `getPhoneNumber` `getUserInfo` `getRealnameAuthInfo` `launchApp` `openSetting` `feedback` `getAuthorize` `contactShare` `lifestyle` |     -     |
| onClick          |           点击事件 |                                                      <font color=#c41d7f>(event) => void</font>                                                       |     -     |
| onGetPhoneNumber | 获取手机号回调事件 |                                                     <font color=#c41d7f>(res: any) => any</font>                                                      |     -     |
