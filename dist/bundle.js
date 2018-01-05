(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tslib'), require('react'), require('styled-components'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['tslib', 'react', 'styled-components', 'react-dom'], factory) :
	(global.TextScroll = factory(global.tslib_1,global.React,global.styled,global.ReactDOM));
}(this, (function (tslib_1,React,styled,ReactDOM) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

var Horizontal = /** @class */ (function (_super) {
    tslib_1.__extends(Horizontal, _super);
    function Horizontal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            duration: 5000,
            content_width: 500,
            container_width: 500,
        };
        return _this;
    }
    Horizontal.prototype.componentDidMount = function () {
        var dom = ReactDOM.findDOMNode(this.container);
        var parentElement = dom.parentElement;
        var children = dom.children;
        var containerWidth = parentElement ? parentElement.clientWidth : 500;
        var contentWidth = 0;
        for (var i = 0; i < children.length; i++) {
            contentWidth += children[i].scrollWidth;
            contentWidth += containerWidth;
        }
        contentWidth = contentWidth === 0 ? 500 : contentWidth;
        var duration = (this.props.speed || 5000) * contentWidth / 500000;
        this.setState({
            duration: duration,
            content_width: contentWidth,
            container_width: containerWidth
        });
    };
    Horizontal.prototype.render = function () {
        var _this = this;
        var Container = styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        position: relative;\n        left:", "px;\n        animation: changebox ", "s linear infinite;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        &:hover {\n            animation-play-state: paused;\n            cursor: default;\n        }\n        @keyframes changebox {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-", "px);\n            }\n        } \n        "], ["\n        position: relative;\n        left:", "px;\n        animation: changebox ", "s linear infinite;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        &:hover {\n            animation-play-state: paused;\n            cursor: default;\n        }\n        @keyframes changebox {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-", "px);\n            }\n        } \n        "])), this.state.container_width, this.state.duration, this.state.content_width);
        var Item = styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n            display:inline-block;\n            margin-right: ", "px\n        "], ["\n            display:inline-block;\n            margin-right: ", "px\n        "])), this.state.container_width);
        return (React.createElement("div", { className: this.props.className },
            React.createElement(Container, { ref: function (div) { return _this.container = div; } }, this.props.text.map(function (e, i) {
                return (React.createElement(Item, { key: i },
                    " ",
                    e));
            }))));
    };
    return Horizontal;
}(React.Component));
var StyledHorizontal = styled(Horizontal)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    width:100%;\n    height: 100%;\n    overflow: hidden;\n    word-break: keep-all;\n    white-space: nowrap;\n"], ["\n    width:100%;\n    height: 100%;\n    overflow: hidden;\n    word-break: keep-all;\n    white-space: nowrap;\n"])));
var templateObject_1;
var templateObject_2;
var templateObject_3;
//# sourceMappingURL=Horizontal.js.map

var Vertical = /** @class */ (function (_super) {
    tslib_1.__extends(Vertical, _super);
    function Vertical() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.request = 0;
        _this.time = 0;
        _this.run = true;
        _this.state = {
            speed: 10,
            position: 21,
            maxPosition: 0,
        };
        _this.tick = function () {
            if (_this.run) {
                if (_this.time++ === 60) {
                    if (_this.run && parseInt((_this.state.maxPosition + _this.state.position).toFixed(2), null) <= 21) {
                        _this.setState({ position: 0 });
                    }
                    _this.run = false;
                    setTimeout(function () {
                        _this.run = true;
                        _this.time = 0;
                    }, 500);
                }
                else {
                    _this.setState({ position: (_this.state.position - 21 / 60) });
                }
            }
            requestAnimationFrame(_this.tick);
        };
        _this.handleMouseEnter = function () {
            console.log(111, _this.run);
            _this.run = false;
            // this.setState({ run: false })
            console.log(111, _this.run);
        };
        _this.handleMouseLeave = function () {
            console.log(22, _this.run);
            _this.run = true;
            // this.setState({ run: true })
            console.log(22, _this.run);
        };
        return _this;
    }
    Vertical.prototype.componentDidMount = function () {
        var dom = ReactDOM.findDOMNode(this.container);
        var children = dom.children;
        // let minHeight = this.state.minHeight
        // for (let i = 0; i < children.length; i++) {
        //   const height = children[i].scrollHeight
        //   if (height > minHeight) {
        //     minHeight = height
        //   }
        // }
        this.setState({ maxPosition: dom.scrollHeight });
        this.request = requestAnimationFrame(this.tick);
    };
    Vertical.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this.request);
    };
    Vertical.prototype.render = function () {
        var _this = this;
        var ItemBox = styled.div(templateObject_1$1 || (templateObject_1$1 = tslib_1.__makeTemplateObject(["\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      transition: all 10s;\n      top:", "px;\n      white-space:nowrap;\n    "], ["\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      transition: all 10s;\n      top:", "px;\n      white-space:nowrap;\n    "])), this.state.position);
        return (React.createElement("div", { className: this.props.className },
            React.createElement(ItemBox, { ref: function (div) { return _this.container = div; }, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, this.props.text.map(function (e, i) {
                return (React.createElement("div", { key: i, style: { textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'default' }, title: e }, e));
            }))));
    };
    return Vertical;
}(React.Component));
var StyledVertical = styled(Vertical)(templateObject_2$1 || (templateObject_2$1 = tslib_1.__makeTemplateObject(["\n    width:100%;\n    height:21px;\n    box-sizing:border-box;\n    overflow:hidden; \n"], ["\n    width:100%;\n    height:21px;\n    box-sizing:border-box;\n    overflow:hidden; \n"])));
var templateObject_1$1;
var templateObject_2$1;

var TextScroll = /** @class */ (function (_super) {
    tslib_1.__extends(TextScroll, _super);
    function TextScroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextScroll.prototype.render = function () {
        return (this.props.mode === 'horizontal' ?
            React.createElement(StyledHorizontal, { text: this.props.text, speed: this.props.speed }) :
            React.createElement(StyledVertical, { text: this.props.text, speed: this.props.speed }));
    };
    return TextScroll;
}(React.Component));

return TextScroll;

})));
