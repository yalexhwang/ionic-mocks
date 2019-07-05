import { of } from 'rxjs/observable/of';

export class ThreeDeeTouchMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(of({}));
        instance.onHomeIconPressed.and.returnValue(of({}));

        return instance;
    }
}
