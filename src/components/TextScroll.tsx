import React from 'react'
import styled from 'styled-components'
import * as ReactDOM from 'react-dom'
import * as Interface from '../interface/ITextScroll'
class TextScroll extends React.Component<Interface.TextScrollProp, Interface.TextScrollState> {
    Container: any
    constructor(props: Interface.TextScrollProp) {
        super(props)
        this.state = {
            duration: 10,
            content_width: 500,
            container_width: 500,

        }

    }
    componentDidMount() {

        let dom = ReactDOM.findDOMNode(this.refs.container)
        let parentElement = dom.parentElement
        const contentWidth = dom ? dom.scrollWidth : 500
        const containerWidth = parentElement ? parentElement.clientWidth : 500

        const duration = (this.props.speed || 10) * contentWidth / containerWidth / 1000
        this.setState({
            duration: duration,
            content_width: contentWidth,
            container_width: containerWidth
        })

    }
    render() {

        const Container = styled.div`
          position: relative
          display: block
          width: auto
          left: 500px
          animation: changebox ${this.state.duration}s linear
          animation-play-state: running
          animation-fill-mode: forwards
          animation-iteration-count: infinite
          @keyframes changebox {
            0% {
              transform: translate3d(0, 0, 0)
            }
            100% {
              transform: translate3d( -${this.state.content_width}px, 0, 0)
            }
          } 
        `
        const Item = styled.span`
        display: 'inline-block'
        margin-right: ${this.state.container_width}px
        `
        return (
            <Container>
                <Item ref={(div: any) => this.Container = div}>
                    {this.props.text.map((e: any, i: number) => {
                        return (
                            <span key={i} > {e}</span>
                        )
                    })}
                </Item>
            </Container>
        )
    }
}

const StyledTextScroll = styled(TextScroll) `
width:100%
`
export default StyledTextScroll
