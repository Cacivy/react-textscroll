(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tslib'), require('react'), require('styled-components'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['tslib', 'react', 'styled-components', 'react-dom'], factory) :
	(global.TextScroll = factory(global.tslib_1,global.React,global.styled,global.ReactDOM));
}(this, (function (tslib_1,React,styled,ReactDOM) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

var HorizontalTextScroll = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalTextScroll, _super);
    function HorizontalTextScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            duration: 10,
            content_width: 500,
            container_width: 500,
        };
        return _this;
    }
    HorizontalTextScroll.prototype.componentDidMount = function () {
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
        var duration = (this.props.speed || 10) * contentWidth / 500000;
        this.setState({
            duration: duration,
            content_width: contentWidth,
            container_width: containerWidth
        });
    };
    HorizontalTextScroll.prototype.render = function () {
        var _this = this;
        var Container = styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        position: relative;\n        display: block;\n        width: auto;\n        left:", "px;\n        animation: changebox ", "s linear;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        animation-iteration-count: infinite;\n        &:hover {\n            animation-play-state: paused;\n            cursor:default;\n        }\n        @keyframes changebox {\n            0% {\n            transform: translate3d(0, 0, 0);\n            }\n            100% {\n            transform: translate3d( -", "px, 0, 0);\n            }\n        } \n        "], ["\n        position: relative;\n        display: block;\n        width: auto;\n        left:", "px;\n        animation: changebox ", "s linear;\n        animation-play-state: running;\n        animation-fill-mode: forwards;\n        animation-iteration-count: infinite;\n        &:hover {\n            animation-play-state: paused;\n            cursor:default;\n        }\n        @keyframes changebox {\n            0% {\n            transform: translate3d(0, 0, 0);\n            }\n            100% {\n            transform: translate3d( -", "px, 0, 0);\n            }\n        } \n        "])), this.state.container_width, this.state.duration, this.state.content_width);
        var Item = styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        display:inline-block;\n        margin-right: ", "px\n        "], ["\n        display:inline-block;\n        margin-right: ", "px\n        "])), this.state.container_width);
        return (React.createElement("div", { className: this.props.className },
            React.createElement(Container, { ref: function (div) { return _this.container = div; } }, this.props.text.map(function (e, i) {
                return (React.createElement(Item, { key: i },
                    " ",
                    e));
            }))));
    };
    return HorizontalTextScroll;
}(React.Component));
var StyledHorizontalTextScroll = styled(HorizontalTextScroll)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    width:100%;\n    height: 100%;\n    overflow: hidden;\n    word-break: keep-all;\n    white-space: nowrap;\n    display:flex;\n    align-items:center ;\n"], ["\n    width:100%;\n    height: 100%;\n    overflow: hidden;\n    word-break: keep-all;\n    white-space: nowrap;\n    display:flex;\n    align-items:center ;\n"])));
var templateObject_1;
var templateObject_2;
var templateObject_3;

var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (this.props.mode === 'horizontal'
            && React.createElement(StyledHorizontalTextScroll, { text: this.props.text, speed: this.props.speed }));
    };
    return App;
}(React.Component));

return App;

})));
