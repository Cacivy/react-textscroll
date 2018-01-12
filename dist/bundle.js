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
        var Container = styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        position: relative;\n        height:30px;\n        left:", "px;\n        animation: changebox ", "s linear infinite;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        \n        &:hover {\n            animation-play-state: paused;\n            cursor: default;\n        }\n        @keyframes changebox {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-", "px);\n            }\n        } \n        "], ["\n        position: relative;\n        height:30px;\n        left:", "px;\n        animation: changebox ", "s linear infinite;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        \n        &:hover {\n            animation-play-state: paused;\n            cursor: default;\n        }\n        @keyframes changebox {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-", "px);\n            }\n        } \n        "])), this.state.container_width, this.state.duration, this.state.content_width);
        var Item = styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n            display:inline-block;\n            line-height:30px;\n            margin-right: ", "px\n        "], ["\n            display:inline-block;\n            line-height:30px;\n            margin-right: ", "px\n        "])), this.state.container_width);
        return (React.createElement("div", { className: this.props.className },
            React.createElement(Container, { ref: function (div) { return _this.container = div; } }, this.props.text.map(function (e, i) {
                return (React.createElement(Item, { key: i, title: e },
                    " ",
                    e));
            }))));
    };
    return Horizontal;
}(React.Component));
var StyledHorizontal = styled(Horizontal)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    width:100%;\n    height: 40px;\n    overflow: hidden;\n    border-bottom: 1px solid #eee;\n    word-break: keep-all;\n    white-space: nowrap;\n    display:flex;\n    align-items:center;\n"], ["\n    width:100%;\n    height: 40px;\n    overflow: hidden;\n    border-bottom: 1px solid #eee;\n    word-break: keep-all;\n    white-space: nowrap;\n    display:flex;\n    align-items:center;\n"])));
var templateObject_1;
var templateObject_2;
var templateObject_3;
//# sourceMappingURL=Horizontal.js.map

var Li = styled.li(templateObject_1$1 || (templateObject_1$1 = tslib_1.__makeTemplateObject(["\n  padding: 0 5px;\n  line-height:30px;\n  color: rgba(0, 0, 0, 0.85);\n  list-style-type:none;\n  cursor: default;\n  overflow:hidden;\n  white-space:nowrap;\n  text-overflow: ellipsis;\n  display:block;\n  \n"], ["\n  padding: 0 5px;\n  line-height:30px;\n  color: rgba(0, 0, 0, 0.85);\n  list-style-type:none;\n  cursor: default;\n  overflow:hidden;\n  white-space:nowrap;\n  text-overflow: ellipsis;\n  display:block;\n  \n"])));
var Div = styled.div(templateObject_2$1 || (templateObject_2$1 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  overflow: hidden;\n  cursor: default;\n"], ["\n  width: 100%;\n  overflow: hidden;\n  cursor: default;\n"])));
var Vertical = /** @class */ (function (_super) {
    tslib_1.__extends(Vertical, _super);
    function Vertical() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = 0;
        _this.innerTimer = 0;
        _this.time = 1;
        _this.run = true;
        _this.position = 0;
        _this.tick = function () {
            if (_this.time % Math.round((_this.props.speed || 5000) / 1000 * 60) === 0 && _this.run) {
                cancelAnimationFrame(_this.innerTimer);
                _this.innerTimer = requestAnimationFrame(_this.scroll);
                _this.time = 0;
            }
            _this.time++;
            if (!_this.run) {
                _this.time = 0;
            }
            cancelAnimationFrame(_this.timer);
            _this.timer = requestAnimationFrame(_this.tick);
        };
        _this.scroll = function () {
            if (_this.position % 30 !== 0) {
                _this.setState({ position: _this.position + 1 });
                if (_this.position > (_this.state.num - 1) * 30) {
                    _this.position = 0;
                }
                cancelAnimationFrame(_this.innerTimer);
                _this.innerTimer = requestAnimationFrame(_this.scroll);
            }
            else {
                cancelAnimationFrame(_this.innerTimer);
            }
            _this.position++;
        };
        _this.handleMouseEnter = function () {
            _this.run = false;
        };
        _this.handleMouseLeave = function () {
            _this.run = true;
        };
        return _this;
    }
    Vertical.prototype.componentWillMount = function () {
        var data = this.props.text;
        data.push(data[0]);
        this.state = {
            position: 0,
            num: this.props.text.length,
            data: data
        };
    };
    Vertical.prototype.componentDidMount = function () {
        cancelAnimationFrame(this.innerTimer);
        this.timer = requestAnimationFrame(this.tick);
    };
    Vertical.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this.timer);
    };
    Vertical.prototype.render = function () {
        var ItemBox = styled.ul(templateObject_3$1 || (templateObject_3$1 = tslib_1.__makeTemplateObject(["\n      width: 100%;\n      height: 30px;\n      position: relative;\n      top:-", "px;\n      padding:0px;\n      margin:0px;\n    "], ["\n      width: 100%;\n      height: 30px;\n      position: relative;\n      top:-", "px;\n      padding:0px;\n      margin:0px;\n    "])), this.state.position);
        return (React.createElement("div", { className: this.props.className, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
            React.createElement(Div, null,
                React.createElement(ItemBox, null, this.state.data.map(function (e, i) {
                    return (React.createElement(Li, { key: i, title: e }, e));
                })))));
    };
    return Vertical;
}(React.Component));
var StyledVertical = styled(Vertical)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  height: 40px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  align-content: flex-start;\n  align-items: center;\n"], ["\n  height: 40px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  align-content: flex-start;\n  align-items: center;\n"])));
var templateObject_1$1;
var templateObject_2$1;
var templateObject_3$1;
var templateObject_4;

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
