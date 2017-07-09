
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

//Loading services
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit, OnDestroy {
    private paramsSubs: Subscription;
    private moviesSearchSubs: Subscription;
    private search: string = "";
    private loading: boolean = false;

    constructor(public moviesService: MoviesService,
                private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        this.paramsSubs = this.activatedRoute.params.subscribe((parameters:object) => {
            let text = parameters['text'];

            if (text) {
                this.search = text;
                this.searchMovie();
            }
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.paramsSubs.unsubscribe();

        if (this.moviesSearchSubs) {
            this.moviesSearchSubs.unsubscribe();
        }
    };

    private searchMovie() {
        if (this.search.length === 0) {
            return;
        }

        this.loading = true;
        this.moviesSearchSubs = this.moviesService.searchMovie(this.search).subscribe(data => {
            this.loading = false;
        }, err => console.log(err));
    };
};
