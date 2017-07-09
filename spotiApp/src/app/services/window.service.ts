
import {Injectable} from "@angular/core";

let _window = (): object => {
    return window;
};

@Injectable()
export class WindowService {
    get nativeWindow(): any {
        return _window();
    };
};
