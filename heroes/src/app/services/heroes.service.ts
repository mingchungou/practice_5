
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

//Loading interfaces
import {Hero} from "../interfaces/hero.interface";

@Injectable()
export class HeroesService {
    private heroesURL:string = "https://heroes-dd822.firebaseio.com/heroes.json";
    private heroURL:string = "https://heroes-dd822.firebaseio.com/heroes/";

    constructor(private http:Http) {

    };

    public add(hero:Hero):Observable<any> {
        let body:string = JSON.stringify(hero);
        let headers:Headers = new Headers({
                "Content-Type": "application/json"
            });

        return this.http.post(this.heroesURL, body, {
            headers
        }).map(res => res.json());
    };

    public update(hero:Hero, key$:string):Observable<any> {
        let body:string = JSON.stringify(hero);
        let url:string = `${this.heroURL}/${key$}.json`;
        let headers:Headers = new Headers({
                "Content-Type": "application/json"
            });

        return this.http.put(url, body, {
            headers
        }).map(res => res.json());
    };

    public get(key$:string):Observable<any> {
        let url:string = `${this.heroURL}/${key$}.json`;

        return this.http.get(url).map(res => res.json());
    };

    public getAll():Observable<any> {
        return this.http.get(this.heroesURL).map(res => res.json());
    };

    public remove(key$:string):Observable<any> {
        let url:string = `${this.heroURL}/${key$}.json`;

        return this.http.delete(url).map(res => res.json());
    };
};



/*
Note:
- Using Firebase as database for this practice.
- When requesting to Firebase by restapi, the url should plus .json.
- The body of request that Firebase accepts is in json format and as string.
- The http service of Angular returns an observer, then is able to use map to
handle response.
- Is able to set manually headers to request of http service.
*/
