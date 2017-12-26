(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tslib'), require('react'), require('styled-components')) :
	typeof define === 'function' && define.amd ? define(['tslib', 'react', 'styled-components'], factory) :
	(global.TextScroll = factory(global.tslib_1,global.React,global.styled));
}(this, (function (tslib_1,React,styled) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className }, "TextScroll cadsasad"));
    };
    return App;
}(React.Component));
var StyledApp = styled(App)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: #abc;\n"], ["\n  color: #abc;\n"])));
var templateObject_1;

return StyledApp;

})));
