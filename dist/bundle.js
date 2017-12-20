(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tslib'), require('react')) :
	typeof define === 'function' && define.amd ? define(['tslib', 'react'], factory) :
	(global.TextScroll = factory(global.tslib_1,global.React));
}(this, (function (tslib_1,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, "TextScroll cadsasad"));
    };
    return App;
}(React.Component));

return App;

})));
