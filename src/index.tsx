import React from 'react'
import Horizontal from './components/Horizontal'
import { TextScrollProp } from './interface'

class TextScroll extends React.Component<TextScrollProp> {
  render() {
    return (
      this.props.mode === 'horizontal' 
      && <Horizontal text={this.props.text} speed={this.props.speed} />
    )
  }
}

export default TextScroll