import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { TextScrollProp } from '../interface'

interface TextScrollState {
  speed: number
  position: number
  maxPosition: number
}

class Vertical extends React.Component<TextScrollProp, TextScrollState> {
  container: any
  request: number = 0
  time: number = 0
  run: boolean = true

  state = {

    speed: 10,
    position: 21,
    maxPosition: 0,
    // run: true

  }

  componentDidMount() {
    let dom = ReactDOM.findDOMNode(this.container)
    let children = dom.children
    // let minHeight = this.state.minHeight
    // for (let i = 0; i < children.length; i++) {
    //   const height = children[i].scrollHeight
    //   if (height > minHeight) {
    //     minHeight = height
    //   }
    // }
    this.setState({ maxPosition: dom.scrollHeight })
    this.request = requestAnimationFrame(this.tick)

  }

  tick = () => {
    if (this.run) {
      if (this.time++ === 60) {

        if (this.run && parseInt((this.state.maxPosition + this.state.position).toFixed(2), null) <= 21) {
          this.setState({ position: 0 })
        }
        this.run = false
        setTimeout(() => {
          this.run = true
          this.time = 0
        }, 500)
      } else {
        this.setState({ position: (this.state.position - 21 / 60) })
      }
    }
    requestAnimationFrame(this.tick)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.request)

  }

  handleMouseEnter = () => {
    console.log(111, this.run)
    this.run = false
    // this.setState({ run: false })
    console.log(111, this.run)
  }
  handleMouseLeave = () => {
    console.log(22, this.run)
    this.run = true
    // this.setState({ run: true })
    console.log(22, this.run)
  }

  render() {
    const ItemBox = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 10s;
      top:${this.state.position}px;
      white-space:nowrap;
    `
    return (
      <div className={this.props.className}
      >
        <ItemBox ref={(div: any) => this.container = div}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.props.text.map((e: any, i: number) => {
            return (
              <div
                key={i}
                style={{ textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'default' }}
                title={e}
              >
                {e}
              </div>
            )
          })}
        </ItemBox>
      </div>
    )
  }
}

const StyledVertical = styled(Vertical) `
    width:100%;
    height:21px;
    box-sizing:border-box;
    overflow:hidden; 
`
export default StyledVertical
