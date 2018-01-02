import React from 'react'
import TextScroll from './components/TextScroll'

class App extends React.Component<{className: string}> {
  render() {
    let data: string[] = [
      '向上滚动动画',
      '向上滚',
      '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
      '就跟CSS2的background属性一样，平时我们都不会像上面一样，把transition的属性一个一个摊开写，而是合并。'
    ]
    return (
      <div style={{ width: '500px' }}>
        <TextScroll text={data} mode={'horizontal'}/>
      </div>
    )
  }
}

const StyledApp = styled(App)`
  color: #abc;
`

export default StyledApp