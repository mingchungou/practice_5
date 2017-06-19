
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

//Loading services
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    private search:string = "";
    private loading:boolean = false;

    constructor(public moviesService:MoviesService,
                private activatedRoute:ActivatedRoute) {

    };

    ngOnInit() {
        this.activatedRoute.params.subscribe((parameters:object) => {
            let text = parameters['text'];

            if (text) {
                this.search = text;
                this.searchMovie();
            }
        }, err => console.log(err));
    };

    private searchMovie() {
        if (this.search.length === 0) {
            return;
        }

        this.loading = true;
        this.moviesService.searchMovie(this.search).subscribe(data => {
            this.loading = false;
        }, err => console.log(err));
    };
};
