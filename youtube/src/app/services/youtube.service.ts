
import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class YoutubeService {
    private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
    private apiKey:string = "AIzaSyBfEA3E8Bik2cr_3h6tA12JFV4Ns6H-Cf8";
    private playlistId:string = "UUbbO4l6IVq3PwR4nDJa21Ww";
    private nextPageToken:string = "";

    constructor(private http:Http) {

    };

    /*
    Function for getting videos of a playlist. But each time, it returns only 10
    videos.
    */
    public getVideos():Observable<any> {
        let url = `${this.youtubeUrl}/playlistItems`;
        let params:URLSearchParams = new URLSearchParams();

        params.set("part", "snippet");
        params.set("maxResults", "10");
        params.set("playlistId", this.playlistId);
        params.set("key", this.apiKey);

        if (this.nextPageToken) {
            params.set("pageToken", this.nextPageToken);
        }

        return this.http.get(url, {search: params}).map(res => {
            let result:object = res.json();
            let videos:any[] = [];

            for (let video of result["items"]) {
                videos.push(video.snippet);
            }

            this.nextPageToken = result["nextPageToken"];

            return videos;
        });
    }
};
