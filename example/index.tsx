import React from 'react'
import ReactDOM from 'react-dom'
import TextScroll from '../src/index'
import { Mode } from '../src/interface'

class App extends React.Component {
  data: string[] = [
    '向上滚动动画',
    '向上滚',
    // '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
    // '就跟CSS2的background属性一样，平时我们都不会像上面一样，把transition的属性一个一个摊开写，而是合并。'
  ]
  render() {
    return (
      <div style={{ width: '400px', border: '1px solid black' }}>
        <TextScroll text={this.data} mode={Mode.horizontal} speed={5000} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
