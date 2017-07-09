
import {Injectable} from "@angular/core";

let _window = (): object => {
    return window;
};

@Injectable()
export class WindowService {
    //Function for returning native window element
    get nativeWindow(): any {
        return _window();
    };
};
