
import {Component, Input} from "@angular/core";

@Component({
    selector: "app-gallery",
    templateUrl: "./gallery.component.html"
})
export class GalleryComponent {
    @Input("title")
    title: string;

    @Input("movies")
    movies: object[];
};
