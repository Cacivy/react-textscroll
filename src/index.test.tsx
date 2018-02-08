import React from 'react'
import TextScroll from './index'
import { mount, configure } from 'enzyme'
import { TextScrollProp, Mode } from 'interface'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
// import render from 'preact-render-to-json'

configure({ adapter: new Adapter() })

describe('render', () => {
  const data: string[] = [
    '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
    '向上滚动动画',
    '向上滚'
  ]
  it('Vertical should be render', () => {
    
    const props: TextScrollProp = { mode: Mode.vertical, text: data, speed: 5000 }
    const wrapper = mount(<TextScroll {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()

  })
  it(' Horizontal should be render', () => {
    const props: TextScrollProp = { mode: Mode.horizontal, text: data, speed: 5000 }
    const wrapper = mount(<TextScroll {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()

  })
})