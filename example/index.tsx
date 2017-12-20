import React from 'react'
import ReactDOM from 'react-dom'
import TextScroll from '../src/index'

class App extends React.Component {
  render() {
    return (
      <div>
        <TextScroll />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
