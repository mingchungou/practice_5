
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "unknownImage"
})
export class UnknownImagePipe implements PipeTransform {
    transform(value: any[]): string {
        return (value.length > 0) ? value[1].url : "assets/img/noimage.png";
    };
};
