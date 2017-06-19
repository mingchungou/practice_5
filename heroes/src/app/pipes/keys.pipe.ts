
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "keys",
    pure: false //Make the pipe to synchronize with heroes object.
})
export class KeysPipe implements PipeTransform {
    transform(value:any):string[] {
        let keys:string[] = [];

        for (let key in value) {
            keys.push(key);
        }

        return keys;
    };
};
