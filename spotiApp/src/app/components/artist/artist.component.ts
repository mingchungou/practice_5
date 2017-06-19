
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

//Loading services
import {SpotifyService} from "../../services/spotify.service";

@Component({
    selector: "app-artist",
    templateUrl: "./artist.component.html"
})
export class ArtistComponent implements OnInit {
    private artist:object = null;
    private artistTrack:object[] = [];

    constructor(private activatedRoute:ActivatedRoute,
                private spotifyService:SpotifyService) {

    };

    ngOnInit() {
        this.activatedRoute.params.map(parameters => parameters["id"]).subscribe(id => {
            this.spotifyService.getArtistById(id).subscribe(data => {
                this.artist = data;
            }, err => console.log(err));
            this.spotifyService.getArtistTopTracks(id).subscribe(data => {
                this.artistTrack = data;
            }, err => console.log(err));
        });
    };
};
