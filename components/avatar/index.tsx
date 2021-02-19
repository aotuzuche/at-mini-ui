import Taro from '@tarojs/taro'
import React from 'react'
import { Image, View, Text } from '@tarojs/components'
import cn from 'classnames'

const defaultAvatar = `data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAMAAAAOARRQAAABpFBMVEUAAADZ2tvc2tza2tra2tva
2tra2trW2dra2tra2tva2tva2trb2tva2tvZ2trb2tva2tvT2drZ2tva2tra2tra2tra2tra2tra
2tva2tra2tra2trM2Nba2trZ2tvc2tza2tra2trY2N7a2tva2tre2t1vzLfe2eDc2t3a2tva2tra
2trh2eHW2N3Z2N3W19ze2d/e2d/a2tra2tri2uHk2uF3zLpyy7dXyK7l2uLa2tvi2eHi2eHk2uJe
ybHa2trj2eG+1dSq0s3l2uLi2uHm2uK+1dTh2eHZ2dzO19qi0cmOz8LB1dSTz8Ta2tre2d/k2eLF
1dbf2eC/1dTi2eCv086g0cmRz8O/1dTO1tqr08zL1tme0cjF1dbI1deRzsRqyrZIx6nK1tjJ1tet
082r0szS19vR1tv////t7/Hr7vCksLqos72rtb7V2d2nsrvByc/N09jW2t29xcvK0NX5+vq3wMiw
usPZ2N7w8vTc4OTY3eHl2eLe2d/29/jX29/7+/zg2eCst8Dy9PXP1Nrg5Oi0vsXl6OvFzNLn6u3a
2tq5wsnO6n8JAAAAZnRSTlMAEDsG5eiUC3CRNdkigx9ktCnSwa5pWRvx3txIDszjP0PIwKSMejmk
h00t697d18zLwbybkWxMEguCdUnUUCoY54Rq9M/CurStp4ZnTTz15dfUrY6JelBKPfSSkXtsYyoh
IefnpKTRazIBAAALgklEQVRo3qxXCVfTQBBO7UHvVkprQUAR8SoieN/3fd/38z2fz8Q26aZ3UmhQ
itaqf9rs7G4mUZR6DD02ect8mW++mdlKA9uZreFIemo0n/96uzA6PJWOhLeekf6v7QmPBAv7I+Hd
0bhvSJKGfPHo7nBkfyE4Et7zvzA2hAJjoVxSWsOSudBYILTh3zGSiUBsJv67HfGZWCCR/LdARgqh
6PrboqHCyIa/B8nEUv7BtvpTsczfAcXTsZz7+sjTV4npbSfPXuh0Lpyd23bt3PlbRySX5WLp+B+D
+GcmsxjJ+M3ElbOWZZpElmVFUWRCTGtl5U763BOE8mcnZ/x/hrI1dsAn1kM3D540qXsZPhiOrMCn
2Zl/8fio2Ok7ENv6J6HsGt0i1htnLplE4Z7tF0DBBXsRs7Pw6LTYvWV018ABbcpMjwsNPZyVwSU3
CsfA4Iq/rdkHOwS905lNg6FsDqREJMdmZccvj4gjuYyGZM2eExGlApsHQckGojwnh+YZN8wXx+Ef
+OYra/48z1E0kF0fJTGc5FWzkyjAiYsm9CzcwwrASecaZy45nFgPJTLFFXZoznlcN1ngFuFFtLAw
757nipuKrIOSGWIPdJAIEBeW8IuxwMLRBuk8eM34zvwWJzHFUKL3kXruXPkJRHFCQbWvXGXEjU/9
hrfsMGPsxIKCmoUVN5ScoAqZZZuthcOMt+HsL5U8ySR/ap/icYo58HLlkZ0I25xnOJsmf6HreDDK
UOYFH8iULG4JltCveCJBgHmR4USD8TU7zESKMbYPPHqL0NtqwDAYfpftwHhSw/61RDbNymUBc4/0
cxyO7EmN4BTf1gLTwXRkjZ48Og5Kvs+TjIWviAXGAybuoYmorGug6/HRn/r1EL91kKNgYlC0HnPU
hago7s4D3q+HJK9tP8Bqn+0WMaBmwSGpEfnjx48KWwnv+AzYlzo3wN2B7V6UjUEfwM8h1agvzlZN
rvbrLaPbNYxWvV+Va/gEP3ULMgfp8QU3emDSWWBuJ9uIVCD7RKn0upquMtO1bq9CgVCH9At5XrkG
/Tqb9pxhYn6gDGsPqw+WRO4bmm6DaAY1zQbStV5fJpgUb9ly2vwx93knkwPm9nEYzDmnpFbtabbr
bn/xS3t1ebn9ZbFSpiG1qpw5D2kQkLkP5lwu4w4Gvo5h73CBUZRG147EUFbfobUVw47IaNRE/lAw
DK1zHZy6whmB+o/uxbA9CapVypqqyc13XltWdFUrV2o8gB+LisyCClIjAiUZhMw8xLJnAPy/a32b
MOMz8/2hSe0Du/hkqJrWrymoThEKdbIC4fiDSTFltkNm9rrowl6l1Bp2LPVlFkC7WKJWbDP+Vluq
1m3UXDUmY3rIXsjOdjF5AiDuGZy8Dhq1j4autpoAUqQIpWIRkAB4uWdrTyGofnev7byExw9wAUxA
zSxgkXD5wx+p24luU7ratm8wwCqV2pS6oi2OOnH3WFS2uQ1qZ4KJIHQcpgxsQ5r5izTKuvqJolDv
AOKEVKQ4i6rerTqtCYkDscFEOB5inMWhZ8reRxLF39LVPqAwz9z4FeWtoqotwv8DTz+wtp7DuATW
9oyx2S1gBF8Mxc5/uUSTzREQhRJHhfBF08oNIuLxDHTzHvxeGKO/T8MQ0wnFOY67S4DUNbVi+2o6
gcDCoa8J4Wh1gol3n+otYC0UprWZgw4gWEUY+O6xzFDvKDIMqM2y0+KRCOIEJtNajlYoK58r3uOS
mGtVQ+19oMEARyWkjC9pOE1DNYQIcCLAyroMh5ygJJ0pQGomwfOPZUMaGghgVThGIKCPZaei0uSg
4TmSBCA5hTPS5v1QOxQAIxe6rtmpUWxHUDL8xZYAw1mrqloFRg9SJjS3An1t/2YpHIEG52l+zgHp
fV3V3wMMaqyEYXEYoqr191hxsqvPWzB1ImEmA2kX9kv3YFv6puqLoAAniJJgD6NZ0tX6Ev5GcJ8f
aPsEMad30wWbziISIRpizxl1icNwJFACrJj6KIyqGSw5eMriXqy31PvutDQBJ9ptsAfM0TSbMwCz
LFA4HlAHmLRw3qt87sh45uZgJkgtOiGNgZ7n3EOWQ5IKnTOL1NGvjM2d5hKdOxU8UokF7QMw0Mak
vA/6GsdAWhUCc4YKdn1btaViixozI05s5hsol7yUhzNt3ql/bElszgxmzZaq9zA3eCJ6BkMmL32V
qInyxb5pU6aX2+8GtWJZ0IaKg9MduP+KMJgaFvF3Rqxgt20Yhp72A7vstsN2GQYM2B8M3Q/stB8Y
BnuNbCmMYmeR2rgN4nhFfnoWTenZtVuErS0XcvkkmiL5WBdKs4aV8+1LeHvn3S0/ZaqoszEMDxEG
Rov7kYGOalcFczg65UTtogc4on4ueIlENrDucIPRxAXeyzJkYJupbVDlyO2rfUPdAkxL/rbae3Lh
j39DyBFzyE3/EhcYO/QoLm2sURxmyAWvrZrsMPevzFdhT572bDVjN7wHHAo4dDyeSBOM1tRDmOlo
xSq70+0MZnV6whhCzqUZU2GGkeMZgw1P4iWBgfqn02oOQxEmWNQxTJDRKb//LcEmhk6ZjUgbq4wP
KuTjOxTQcLOTk08UltIYYxvkKx4ROmMiYHykiuACFD6Kpu4huJtbcAFPbfXnoaMmfL5tcAHw9mF4
lEQQ05rsFtxmW6qal5yRd5r8Ujw4NNQ4T5o3WqvjNktRRjzpXtIakrQApD3tjGpZV5uR7qrlGNNl
lLXsg06ZM85DrPJ+cJJ+862/3jErRDIaRNsU0qrDIshkrjorKXJz/Oax5EABJRuBr9HR8AG9TrbK
7EgWioLt7udQQKEcFO2I1E1IN9mVKKeQcDYTBdz3QjmI4haFbS5mM2p9TZDer1VhrBZnBjH8+zYW
tyjV0XJKUvf7OdLq8CrGYUWlKotL2gVqAZTqIB5o88T16B6nNKqs7fplsXWhTFnUzN2niS17TMQD
NOoDqpJwl0K9LMvCqNek4HesFi+GUUCjJqSQX5h2gxmGpVgUTFsxGP6f/SySQlDcz19G5F5gLkVS
Q9u5kC0mMPmEtILiTgj7J+SC+ASYtd9E0enJr5/DpJ9wNm9A2CftB/HEOExgNJpRidTryW7yfGoO
tB9mzZRRa4vVGNHSw4D7jsO44BirxQCg6zfSTJm3hmQhyb60M4OcsUkERyZzg+xI8wrRt9Rf0Rpa
aHSJLtFEtg5i81mjmK80T6Iehc3ddzS65m07mFaqQq37a5OqOMQTIQ2DpOo8xZmPaNstNSHRz37G
dpKibKwTInPibv+bNXvWhKEoDFNtrIJSlZb60VQQIRYUKrjUOio6qJUOKhSrm1vmu3Rw9VcXP5In
p6ZJYxy8oINEbu7Jew7kfd7xEBPS1VLlHzwFe6TyK6pnTxSwLRmWKutmB+2YoMiaVwWBBpAd0rTP
vP7EIHa1u5N9gRdQLwNYWDN0Jb2wUv0ldvcf5n2ZWe6ENZJN8BHeywF/dTHvj1Y0C4qQjJOtKJa1
G5ci984UFOEBVrLSGWMbq/9k1azNLTl3JoAVP0zEcBPSko4mOqRyZmcCJvKBXmVoJ8MdHRy+gDg8
F9WdAr38EF6kzyE4lXOccQjhdauP4b4/QHheQDLZhGthszBWEbto2HViCZD0WjHwqt0O9ARlQ4mo
3BzPwav/hcUlgxo5OlScUsyGb2MILA6CvvcwT84UTiUhm3qZW+j76T4oyK+7zWCsXThVLbUA5J8Q
S6jzwsIs/jW+Va2aCRBLIGRRcIQsGibYk3bFaFTd1sIOWRSq0VMjI8/NNtoSBVuZ63ZiICIjoQIw
b6+9a9OJArYRGPXeSw0eZQAmdJznanZbNRqHOE+7bKS+ZkdxnssNJ+2jVlol439ZpqLdRcIGx/SW
d3CspRMcC7FKuxjcg2uH7WJwpXOG+rTjUJ92vlAfd16Mx9J6PjfabEa5vJ6OxYuc0G/9AHEtY+/N
0xcHAAAAAElFTkSuQmCC`

interface IProps {
  url?: string
  size?: 'small' | 'normal' | 'large'
  circle?: boolean
  text?: string
  className?: string
  customStyle?: React.CSSProperties
  onClick?: () => void
}

const AmAvatar: Taro.FC<IProps> = (props) => {
  const {
    url = defaultAvatar,
    size = 'normal',
    circle,
    text,
    onClick,
    className = '',
    customStyle,
  } = props

  let headCover = defaultAvatar
  if (!text && url) {
    headCover = url
  }

  const onAvatarClick = () => {
    if (!onClick) {
      return
    }

    onClick()
  }

  const classname = cn(
    'am-avatar',
    `am-avatar--${size}`,
    {
      'am-avatar--circle': circle,
      'am-avatar--text': !!text,
    },
    className
  )

  return (
    <View
      className={classname}
      style={{ ...customStyle }}
      onClick={onAvatarClick}
    >
      {text ? (
        <Text className="am-avatar__text">{text}</Text>
      ) : (
        <Image src={headCover} className="am-avatar__img" />
      )}
    </View>
  )
}

AmAvatar.defaultProps = {
  size: 'normal',
  circle: true,
  text: '',
  url: defaultAvatar,
  className: '',
}

AmAvatar.options = {
  addGlobalClass: true,
}

export default AmAvatar
