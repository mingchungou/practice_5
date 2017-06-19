
import {Component, OnInit} from "@angular/core";

//Loading services
import {SpotifyService} from "../../services/spotify.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    private searchValue:string = "";

    constructor(private spotifyService:SpotifyService) {

    };

    ngOnInit() {

    };

    private searchArtist():void {
        if (this.searchValue) {
            this.spotifyService.getArtists(this.searchValue).subscribe();
        }
    };
};
