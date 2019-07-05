import { of } from 'rxjs/observable/of';

export class KeyboardMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);

        instance.onKeyboardShow.and.returnValue(of({}));
        instance.onKeyboardHide.and.returnValue(of({}));

        return instance;
    }
}
