
import {Component, OnInit} from "@angular/core";

import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private billboard:object[];
    private topTracks:object[];
    private topTracksKids:object[];

    constructor(public moviesService:MoviesService) {

    };

    ngOnInit() {
        this.moviesService.getBillboard().subscribe(data => {
            this.billboard = data;
        }, err => console.log(err));

        this.moviesService.getTopTracks().subscribe(data => {
            this.topTracks = data;
        }, err => console.log(err));

        this.moviesService.getTopTracksKids().subscribe(data => {
            this.topTracksKids = data;
        }, err => console.log(err));
    };
};
