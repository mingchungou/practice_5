
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

//Loading services
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html"
})
export class MovieComponent implements OnInit, OnDestroy {
    private paramsSubs: Subscription;
    private movie: object;
    private previousPath: string = "";
    private previousSearch: string = "";

    constructor(public moviesService: MoviesService,
                private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        this.paramsSubs = this.activatedRoute.params.subscribe((parameters: object) => {
            this.moviesService.getMovie(parameters["id"]).subscribe(data => {
                console.log(this.movie);
                this.movie = data;
                this.previousPath = parameters["page"];

                if (parameters["text"]) {
                    this.previousSearch = parameters["text"];
                }
            }, err => console.log(err));
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.paramsSubs.unsubscribe();
    };

    private getPopularity(popularity: number): number {
        popularity = Math.round(popularity) / 10;

        if (popularity >= 10) {
            return 10;
        } else {
            return popularity;
        }
    };
};
