
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {
    public artists: object[] = [];
    private searchURL: string = "https://api.spotify.com/v1/";
    private token: string = "BQBUaMQnhXfMFoqkHxUb65Cr0xmtDlbigqS_boDSJmPQ2H_7SAvB2jBZ7L5umMv_7bsCkl3lFDQ2sWd-h-vAJrKYZmQc3JzEBYbyodfOadoU84shhPIbP5XTXA13FOpes_4orAcCeaRET0jlauRoTq5huOHQOT-zlNHlkG484rAjzLVNAhR74HMynEdGV1XLzcVcJRCjI0k4BNJdZTzhcXj0zrqGBmiG8BvQ0a0mFdlgIt04LzhUfuZpjKl9v1M_EvD9w7vxAUwYDu2arldXZruxF1AV1Ik52p6GeDgWPkzq4beT3N5nCtCMS5H3EO_hlfbXQw";

    constructor(private http: Http) {

    };

    private initHeader(headers: Headers): void {
        headers.append("Authorization", "Bearer " + this.token);
    };

    //Function for getting artists based on searching data.
    public getArtists(value: string): Observable<any> {
        let query: string = `search?q=${value}&type=artist`;
        let url: string = this.searchURL + query;
        let headers: Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            this.artists = res.json().artists.items;
        });
    };

    //Function for getting a specific artist by id.
    public getArtistById(id: string): Observable<any> {
        let query: string = `artists/${id}`;
        let url: string = this.searchURL + query;
        let headers:Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            return res.json();
        });
    };

    //Function for getting top trackts of specific artist by id.
    public getArtistTopTracks(id: string): Observable<any> {
        let query: string = `artists/${id}/top-tracks?country=US`;
        let url: string = this.searchURL + query;
        let headers: Headers = new Headers();

        this.initHeader(headers);
        return this.http.get(url, {
            headers
        }).map(res => {
            return res.json().tracks;
        });
    };
};
