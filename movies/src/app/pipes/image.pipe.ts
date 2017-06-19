
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "image"
})
export class ImagePipe implements PipeTransform {
    transform(movie:any, poster:boolean = false):string {
        let url:string = "http://image.tmdb.org/t/p/w500";

        if (poster) {
            if (movie.poster_path) {
                return url + movie.poster_path;
            } else {
                return "assets/img/no-image.jpg";
            }
        } else {
            if (movie.backdrop_path) {
                return url + movie.backdrop_path;
            } else if (movie.poster_path) {
                return url + movie.poster_path;
            } else {
                return "assets/img/no-image.jpg";
            }
        }
    };
};
