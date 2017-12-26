import React from 'react'
import styled from 'styled-components'

class App extends React.Component<{className: string}> {
  render() {
    return (
      <div className={this.props.className}>
        TextScroll cadsasad
      </div>
    )
  }
}

const StyledApp = styled(App)`
  color: #abc;
`

export default StyledApp