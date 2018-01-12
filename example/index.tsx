import React from 'react'
import ReactDOM from 'react-dom'
import TextScroll from '../src/index'
import { Mode } from '../src/interface'

class App extends React.Component {

  data: string[] = [
    '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
    '向上滚动动画',
    '向上滚',

    // '就跟CSS2的background属性一样，平时我们都不会像上面一样，把transition的属性一个一个摊开写，而是合并。'
  ]
  render() {
    return (
      <div>
        <div style={{ width: '300px', border: '1px solid black', margin: '5px' }}>
          <TextScroll text={this.data} mode={Mode.vertical} speed={3000} />
        </div>
        <div style={{ width: '300px', border: '1px solid black', margin: '5px' }}>
          <TextScroll text={this.data} mode={Mode.horizontal} speed={6000} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
