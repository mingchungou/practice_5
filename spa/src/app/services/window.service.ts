
import {Injectable} from "@angular/core";

let _window = ():Object => {
    return window;
};

@Injectable()
export class WindowService {
    //Function for returning native window element
    get nativeWindow():any {
        return _window();
    };
};
