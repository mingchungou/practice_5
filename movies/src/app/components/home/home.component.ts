
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

//Loading services
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
    private moviesGetBillSubs: Subscription;
    private moviesGetTopTracksSubs: Subscription;
    private moviesGetTopKidsSubs: Subscription;
    private billboard: object[];
    private topTracks: object[];
    private topTracksKids: object[];

    constructor(public moviesService: MoviesService) {

    };

    ngOnInit() {
        this.moviesGetBillSubs = this.moviesService.getBillboard().subscribe(data => {
            this.billboard = data;
        }, err => console.log(err));

        this.moviesGetTopTracksSubs = this.moviesService.getTopTracks().subscribe(data => {
            this.topTracks = data;
        }, err => console.log(err));

        this.moviesGetTopKidsSubs = this.moviesService.getTopTracksKids().subscribe(data => {
            this.topTracksKids = data;
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.moviesGetBillSubs.unsubscribe();
        this.moviesGetTopTracksSubs.unsubscribe();
        this.moviesGetTopKidsSubs.unsubscribe();
    };
};
