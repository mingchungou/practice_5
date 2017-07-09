
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

//Loading services
import {SpotifyService} from "../../services/spotify.service";

@Component({
    selector: "app-artist",
    templateUrl: "./artist.component.html"
})
export class ArtistComponent implements OnInit, OnDestroy {
    private paramsSubs: Subscription;
    private artistGetSubs: Subscription;
    private artistTopTracksSubs: Subscription;
    private artist: object = null;
    private artistTrack: object[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private spotifyService: SpotifyService) {

    };

    ngOnInit() {
        this.paramsSubs = this.activatedRoute.params.map(parameters => parameters["id"]).subscribe(id => {
            this.artistGetSubs = this.spotifyService.getArtistById(id).subscribe(data => {
                this.artist = data;
            }, err => console.log(err));
            this.artistTopTracksSubs = this.spotifyService.getArtistTopTracks(id).subscribe(data => {
                this.artistTrack = data;
            }, err => console.log(err));
        });
    };

    ngOnDestroy() {
        this.paramsSubs.unsubscribe();

        if (this.artistGetSubs) {
            this.artistGetSubs.unsubscribe();
        }

        if (this.artistTopTracksSubs) {
            this.artistTopTracksSubs.unsubscribe();
        }
    };
};
