
import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

//Loading services
import {YoutubeService} from "../../services/youtube.service";

declare var $: any;

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnDestroy {
    private videosGetSubs: Subscription;
    private videosGetMoreSubs: Subscription;
    private videos: object[] = [];
    private videoSelected: any;

    constructor(private youtubeService: YoutubeService) {
        this.videosGetSubs = youtubeService.getVideos().subscribe(data => {
            this.videos = data;
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.videosGetSubs.unsubscribe();

        if (this.videosGetMoreSubs) {
            this.videosGetMoreSubs.unsubscribe();
        }
    };

    //function for displaying the modal.
    private watchVideo(video: object): void {
        this.videoSelected = video;
        $("#myModal").modal();
    };

    //Function for closing the modal
    private closeModal(): void {
        this.videoSelected = null;
        $("#myModal").modal("hide");
    };

    //Function for loading more videos within card-column.
    private loadMore(): void {
        this.videosGetMoreSubs = this.youtubeService.getVideos().subscribe(data => {
            //First way to concat
            //this.videos = this.videos.concat(data);

            //Second way to concat
            this.videos.push.apply(this.videos, data);
        }, err => console.log(err));
    };
};
