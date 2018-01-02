import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import * as Interface from '../interface/ITextScroll'
class TextScroll extends React.Component<Interface.TextScrollProp, Interface.TextScrollState> {
    container: any
    constructor(props: Interface.TextScrollProp) {
        super(props)
        this.state = {
            duration: 10,
            content_width: 500,
            container_width: 500,
        }

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

        let duration = (this.props.speed || 10) * contentWidth / 500000
        this.setState({
            duration: duration,
            content_width: contentWidth,
            container_width: containerWidth
        })

    }
    render() {
        const Container = styled.div`
        position: relative;
        display: block;
        width: auto;
        left:${this.state.container_width}px;
        animation: changebox ${this.state.duration}s linear;
        animation-play-state: running;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        &:hover {
            animation-play-state: paused;
            cursor:default;
        }
        @keyframes changebox {
            0% {
            transform: translate3d(0, 0, 0);
            }
            100% {
            transform: translate3d( -${this.state.content_width}px, 0, 0);
            }
        } 
        `
        const Item = styled.span`
        display:inline-block;
        margin-right: ${this.state.container_width}px
        `
        return (
            <div className={this.props.className}>
                <Container ref={(div: any) => this.container = div}>
                    {this.props.text.map((e: any, i: number) => {
                        return (
                            <Item key={i} > {e}</Item>
                        )
                    })}
                </Container>
            </div>
        )
    }
}
const StyledTextScroll = styled(TextScroll) `
    width:100%;
    height: 100%;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    display:flex;
    align-items:center ;
`
export default StyledTextScroll
