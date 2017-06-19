
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {
    public artists:object[] = [];
    private searchURL:string = "https://api.spotify.com/v1/";
    private token:string = "BQDDREr2-RRQK4xRrsWCA1mp8RteZE0XeI4BG62hyIeO3Xb8ruqO6Bm42ORi_3jamYo9og_49U_xcjkHki8goUt5fthREOZEtlYcWEdvfhFsV3_yvXLcMJTsxMluaXBL7QS8ZT1LTKSwl9TQGvfwPkY8Q6zzAAF-yoZp5KQ7-ZScSmjs44g15qxUXlT2DvGDlVuEJWN99kW6GlZv3gD8GzVD7sPlXLBiZ4CPUnEh2ISM-U_oPdiXjQvSPRmW5s5EZtJYKPDIyqTGkhJNxd18q1Lf2v74FrSDR2wFhMUnyhSHiT6r_U3BmwSZz4QUl6fxMl4FWw";

    constructor(private http:Http) {

    };

    private initHeader(headers:Headers):void {
        headers.append("Authorization", "Bearer " + this.token);
    };

    //Function for getting artists based on searching data.
    public getArtists(value:string):Observable<any> {
        let query:string = `search?q=${value}&type=artist`;
        let url:string = this.searchURL + query;
        let headers:Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            this.artists = res.json().artists.items;
        });
    };

    //Function for getting a specific artist by id.
    public getArtistById(id:string):Observable<any> {
        let query:string = `artists/${id}`;
        let url:string = this.searchURL + query;
        let headers:Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            return res.json();
        });
    };

    //Function for getting top trackts of specific artist by id.
    public getArtistTopTracks(id:string):Observable<any> {
        let query:string = `artists/${id}/top-tracks?country=US`;
        let url:string = this.searchURL + query;
        let headers:Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            return res.json().tracks;
        });
    };
};
