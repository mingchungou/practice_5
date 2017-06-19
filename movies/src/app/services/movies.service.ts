
import {Injectable} from "@angular/core";
import {Jsonp} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class MoviesService {
    private apiKey:string = "9275f16f1cbeb7de847b157de4b2b1f9";
    private urlMoviedb:string = "https://api.themoviedb.org/3";
    public movies:object[] = [];

    constructor(private jsonp:Jsonp) {

    };

    public getTopTracks():Observable<any> {
        let url:string = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).map(res => res.json().results);
    };

    public getTopTracksKids():Observable<any> {
        let url:string = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).map(res => res.json().results);
    };

    private parseDateString(date:Date):string {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    public getBillboard():Observable<any> {
        let fromString:string = this.parseDateString(new Date());
        let to:Date = new Date();
        to.setDate(to.getDate() + 7);
        let toString:string = this.parseDateString(to);

        let url:string = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fromString}&primary_release_date.lte=${toString}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).map(res => res.json().results);
    };

    public searchMovie(text:string):Observable<any> {
        let url:string = `${this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).map(res => {
            this.movies = res.json().results;
            return this.movies;
        });
    };

    public getMovie(id:string):Observable<any> {
        let url:string = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).map(res => res.json());
    };
};



/*
Note:
- Using jsonp to avoid problem with cross-origin resource between request of two
different servers.
- When requesting a server but being in the same domain, then the request is consider
safe.
- When requesting a server but being in the different domain, then the request is
consider unsafe, so there are cors and cross-origin resource sharing config to avoid
this problem.
*/
