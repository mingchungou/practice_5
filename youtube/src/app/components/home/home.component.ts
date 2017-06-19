
import {Component, OnInit} from "@angular/core";

//Loading services
import {YoutubeService} from "../../services/youtube.service";

declare var $:any;

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private videos:object[] = [];
    private videoSelected:any;

    constructor(private youtubeService:YoutubeService) {
        youtubeService.getVideos().subscribe(data => {
            this.videos = data;
        }, err => console.log(err));
    };

    ngOnInit() {

    };

    //function for displaying the modal.
    private watchVideo(video:object):void {
        this.videoSelected = video;
        $("#myModal").modal();
    };

    //Function for closing the modal
    private closeModal():void {
        this.videoSelected = null;
        $("#myModal").modal("hide");
    };

    //Function for loading more videos within card-column.
    private loadMore():void {
        this.youtubeService.getVideos().subscribe(data => {
            //First way to concat
            //this.videos = this.videos.concat(data);

            //Second way to concat
            this.videos.push.apply(this.videos, data);
        }, err => console.log(err));
    };
};
