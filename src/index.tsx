import React from 'react'
import HorizontalTextScroll from './components/Horizontal-TextScroll'
import styled from 'styled-components'
import * as Interface from './interface/ITextScroll'
class App extends React.Component<Interface.TextScrollProp> {
  render() {
    return (
      this.props.mode === 'horizontal' 
      && <HorizontalTextScroll text= { this.props.text }  speed= { this.props.speed } />
    )
}
}

export default App