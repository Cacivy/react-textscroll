import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { TextScrollProp } from '../interface'

interface TextScrollState {
  duration: number,
  content_width?: number,
  container_width?: number
}

class Horizontal extends React.Component<TextScrollProp, TextScrollState> {
  container: any

  state = {
    duration: 5000,
    content_width: 500,
    container_width: 500,
  }

  componentDidMount() {
    let dom = ReactDOM.findDOMNode(this.container)
    let parentElement = dom.parentElement
    let children = dom.children
    let containerWidth = parentElement ? parentElement.clientWidth : 500
    let contentWidth = 0
    for (let i = 0; i < children.length; i++) {
      contentWidth += children[i].scrollWidth
      contentWidth += containerWidth
    }
    contentWidth = contentWidth === 0 ? 500 : contentWidth

    let duration = (this.props.speed || 5000) * contentWidth / 500000
    this.setState({
      duration: duration,
      content_width: contentWidth,
      container_width: containerWidth
    })

  }
  render() {
    const Container = styled.div`
        position: relative;
        height:30px;
        left:${this.state.container_width}px;
        animation: changebox ${this.state.duration}s linear infinite;
        animation-play-state: running;
        animation-fill-mode: forwards;
        
        &:hover {
            animation-play-state: paused;
            cursor: default;
        }
        @keyframes changebox {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-${this.state.content_width}px);
            }
        } 
        `
    const Item = styled.span`
            display:inline-block;
            line-height:30px;
            margin-right: ${this.state.container_width}px
        `
    return (
      <div className={this.props.className}>
        <Container ref={(div: any) => this.container = div}>
          {this.props.text.map((e: any, i: number) => {
            return (
              <Item key={i} title={e}> {e}</Item>
            )
          })}
        </Container>
      </div>
    )
  }
}

const StyledHorizontal = styled(Horizontal) `
    width:100%;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    word-break: keep-all;
    white-space: nowrap;
    display:flex;
    align-items:center;
`
export default StyledHorizontal
