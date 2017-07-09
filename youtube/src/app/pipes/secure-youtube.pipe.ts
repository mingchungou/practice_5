
import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
    name: "secureYoutube"
})
export class SecureYoutube implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {

    };

    transform(value: string): SafeResourceUrl {
        let url: string = "https://www.youtube.com/embed/";

        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
};
