import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { TextScrollProp } from '../interface'

const Li = styled.li`
  padding: 0 5px;
  line-height:30px;
  color: rgba(0, 0, 0, 0.85);
  list-style-type:none;
  cursor: default;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  display:block;
  
`
const Div = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: default;
`

interface TextScrollState {
  position: number
  num: number
  data: Array<string>
}

class Vertical extends React.Component<TextScrollProp, TextScrollState> {

  timer: number = 0
  innerTimer: number = 0
  time: number = 1
  run: boolean = true
  position: number = 0

  state = {
    position: 0,
    num: this.props.text.length,
    data: []
  }
  componentWillMount() {
    let data = this.props.text
    data.push(data[0])
    this.setState({ data: data })
  }

  componentDidMount() {
    cancelAnimationFrame(this.innerTimer)
    this.timer = requestAnimationFrame(this.tick)

  }

  tick = () => {
    if (this.time % Math.round((this.props.speed || 5000) / 1000 * 60) === 0 && this.run) {
      cancelAnimationFrame(this.innerTimer)
      this.innerTimer = requestAnimationFrame(this.scroll)
      this.time = 0
    }
    this.time++
    if (!this.run) {
      this.time = 0
    }
    cancelAnimationFrame(this.timer)
    this.timer = requestAnimationFrame(this.tick)
  }

  scroll = () => {

    if (this.position % 30 !== 0) {
      this.setState({ position: this.position + 1 })
      if (this.position > (this.state.num - 1) * 30) {
        this.position = 0
      }
      cancelAnimationFrame(this.innerTimer)
      this.innerTimer = requestAnimationFrame(this.scroll)
    } else {
      cancelAnimationFrame(this.innerTimer)
    }
    this.position++
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timer)

  }

  handleMouseEnter = () => {
    this.run = false
  }
  handleMouseLeave = () => {
    this.run = true
  }

  render() {

    const ItemBox = styled.ul`
      width: 100%;
      height: 30px;
      position: relative;
      top:-${this.state.position}px;
      padding:0px;
      margin:0px;
    `
    return (
      <div
        className={this.props.className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Div>
          <ItemBox>
            {this.state.data.map((e: any, i: number) => {
              return (
                <Li key={i} title={e} >
                  {e}
                </Li>
              )
            })}
          </ItemBox>
        </Div>
      </div>
    )
  }
}

const StyledVertical = styled(Vertical) `
  height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-content: flex-start;
  align-items: center;
`
export default StyledVertical
