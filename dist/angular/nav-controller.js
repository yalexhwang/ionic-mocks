"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var of_1 = require("rxjs/observable/of");
var view_controller_1 = require("./view-controller");
var NavControllerMock = /** @class */ (function () {
    function NavControllerMock() {
    }
    NavControllerMock.instance = function () {
        var instance = create_spy_1.createSpyObj('NavController', [
            'goToRoot',
            'initPane',
            'paneChanged',
            'push',
            'insert',
            'insertPage',
            'pop',
            'popTo',
            'popToRoot',
            'popAll',
            'remove',
            'removeView',
            'setRoot',
            'setPages',
            'hasChildren',
            'getActiveChildNav',
            'registerChildNav',
            'unregisterChildNav',
            'destroy',
            'swipeBackStart',
            'swipeBackProgress',
            'swipeBackEnd',
            'canSwipeBack',
            'canGoBack',
            'isTransitioning',
            'setTransitioning',
            'getActive',
            'isActive',
            'getByIndex',
            'getPrevious',
            'first',
            'last',
            'indexOf',
            'length',
            'getViews',
            'isSwipeBackEnabled',
            'dismissPageChangeViews',
            'setViewPort',
            'resize',
            'viewDidEnter',
            'viewDidLeave',
            'viewDidLoad',
            'viewWillEnter',
            'viewWillLeave',
            'viewWillUnload'
        ]);
        instance.goToRoot.and.returnValue(Promise.resolve());
        instance.initPane.and.returnValue(1);
        instance['root'] = view_controller_1.ViewControllerMock.instance();
        instance['rootParams'] = {};
        instance.push.and.returnValue(Promise.resolve());
        instance.insert.and.returnValue(Promise.resolve());
        instance.insertPage.and.returnValue(Promise.resolve());
        instance.pop.and.returnValue(Promise.resolve());
        instance.popTo.and.returnValue(Promise.resolve());
        instance.popToRoot.and.returnValue(Promise.resolve());
        instance.popAll.and.returnValue(Promise.resolve());
        instance.remove.and.returnValue(Promise.resolve());
        instance.removeView.and.returnValue(Promise.resolve());
        instance.setRoot.and.returnValue(Promise.resolve());
        instance.setPages.and.returnValue(Promise.resolve());
        instance.hasChildren.and.returnValue(true);
        instance.canSwipeBack.and.returnValue(true);
        instance.canGoBack.and.returnValue(true);
        instance.isTransitioning.and.returnValue(false);
        instance.getActive.and.returnValue(view_controller_1.ViewControllerMock.instance());
        instance.isActive.and.returnValue(true);
        instance.getByIndex.and.returnValue(view_controller_1.ViewControllerMock.instance());
        instance.getPrevious.and.returnValue(view_controller_1.ViewControllerMock.instance());
        instance.first.and.returnValue(view_controller_1.ViewControllerMock.instance());
        instance.last.and.returnValue(view_controller_1.ViewControllerMock.instance());
        instance.indexOf.and.returnValue(0);
        instance.length.and.returnValue(0);
        instance.getViews.and.returnValue([]);
        instance.isSwipeBackEnabled.and.returnValue(true);
        instance.viewDidEnter = of_1.of();
        instance.viewDidLeave = of_1.of();
        instance.viewDidLoad = of_1.of();
        instance.viewWillEnter = of_1.of();
        instance.viewWillLeave = of_1.of();
        instance.viewWillUnload = of_1.of();
        return instance;
    };
    return NavControllerMock;
}());
exports.NavControllerMock = NavControllerMock;
//# sourceMappingURL=nav-controller.js.map