"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var KeyboardMock = /** @class */ (function () {
    function KeyboardMock() {
    }
    KeyboardMock.instance = function () {
        var instance = jasmine.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);
        instance.onKeyboardShow.and.returnValue(of_1.of({}));
        instance.onKeyboardHide.and.returnValue(of_1.of({}));
        return instance;
    };
    return KeyboardMock;
}());
exports.KeyboardMock = KeyboardMock;
//# sourceMappingURL=keyboard.js.map