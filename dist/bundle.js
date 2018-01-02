(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tslib'), require('react'), require('styled-components'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['tslib', 'react', 'styled-components', 'react-dom'], factory) :
	(global.TextScroll = factory(global.tslib_1,global.React,global.styled,global.ReactDOM));
}(this, (function (tslib_1,React,styled,ReactDOM) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

var TextScroll = /** @class */ (function (_super) {
    tslib_1.__extends(TextScroll, _super);
    function TextScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            duration: 10,
            content_width: 500,
            container_width: 500,
        };
        return _this;
    }
    TextScroll.prototype.componentDidMount = function () {
        var dom = ReactDOM.findDOMNode(this.refs.container);
        var parentElement = dom.parentElement;
        var contentWidth = dom ? dom.scrollWidth : 500;
        var containerWidth = parentElement ? parentElement.clientWidth : 500;
        var duration = (this.props.speed || 10) * contentWidth / containerWidth / 1000;
        this.setState({
            duration: duration,
            content_width: contentWidth,
            container_width: containerWidth
        });
    };
    TextScroll.prototype.render = function () {
        var _this = this;
        var Container = styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          position: relative\n          display: block\n          width: auto\n          left: 500px\n          animation: changebox ", "s linear\n          animation-play-state: running\n          animation-fill-mode: forwards\n          animation-iteration-count: infinite\n          @keyframes changebox {\n            0% {\n              transform: translate3d(0, 0, 0)\n            }\n            100% {\n              transform: translate3d( -", "px, 0, 0)\n            }\n          } \n        "], ["\n          position: relative\n          display: block\n          width: auto\n          left: 500px\n          animation: changebox ", "s linear\n          animation-play-state: running\n          animation-fill-mode: forwards\n          animation-iteration-count: infinite\n          @keyframes changebox {\n            0% {\n              transform: translate3d(0, 0, 0)\n            }\n            100% {\n              transform: translate3d( -", "px, 0, 0)\n            }\n          } \n        "])), this.state.duration, this.state.content_width);
        var Item = styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        display: 'inline-block'\n        margin-right: ", "px\n        "], ["\n        display: 'inline-block'\n        margin-right: ", "px\n        "])), this.state.container_width);
        return (React.createElement(Container, null,
            React.createElement(Item, { ref: function (div) { return _this.Container = div; } }, this.props.text.map(function (e, i) {
                return (React.createElement("span", { key: i },
                    " ",
                    e));
            }))));
    };
    return TextScroll;
}(React.Component));
var StyledTextScroll = styled(TextScroll)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\nwidth:100%\n"], ["\nwidth:100%\n"])));
var templateObject_1;
var templateObject_2;
var templateObject_3;

var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var data = [
            '向上滚动动画',
            '向上滚',
            '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
            '就跟CSS2的background属性一样，平时我们都不会像上面一样，把transition的属性一个一个摊开写，而是合并。'
        ];
        return (React.createElement("div", { style: { width: '500px' } },
            React.createElement(StyledTextScroll, { text: data, mode: 'horizontal' })));
    };
    return App;
}(React.Component));
var StyledApp = styled(App)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: #abc;\n"], ["\n  color: #abc;\n"])));
var templateObject_1;

return StyledApp;

})));
