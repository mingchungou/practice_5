
import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

//Loading services
import {SpotifyService} from "../../services/spotify.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnDestroy {
    private artistsSearchSubs: Subscription
    private searchValue: string = "";

    constructor(private spotifyService: SpotifyService) {

    };

    ngOnDestroy() {
        if (this.artistsSearchSubs) {
            this.artistsSearchSubs.unsubscribe();
        }
    };

    private searchArtist(): void {
        if (this.searchValue.length > 0) {
            this.artistsSearchSubs = this.spotifyService.getArtists(this.searchValue).subscribe();
        }
    };
};
