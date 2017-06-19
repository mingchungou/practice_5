
import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: "app-gallery",
    templateUrl: "./gallery.component.html"
})
export class GalleryComponent implements OnInit {
    @Input("title") title;
    @Input("movies") movies;

    constructor() {

    };

    ngOnInit() {
        
    };
};
