"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var ThreeDeeTouchMock = /** @class */ (function () {
    function ThreeDeeTouchMock() {
    }
    ThreeDeeTouchMock.instance = function () {
        var instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(of_1.of({}));
        instance.onHomeIconPressed.and.returnValue(of_1.of({}));
        return instance;
    };
    return ThreeDeeTouchMock;
}());
exports.ThreeDeeTouchMock = ThreeDeeTouchMock;
//# sourceMappingURL=three-dee-touch.js.map