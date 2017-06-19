
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import "rxjs/add/operator/filter";
import auth0 from "auth0-js";

@Injectable()
export class AuthService {
    private auth0:auth0.WebAuth = new auth0.WebAuth({
        clientID: "mVQmxz4VfsGNdhsZlI2Rfj8bv5ivnHaX",
        domain: "mingchung.auth0.com",
        responseType: "token id_token",
        audience: "https://mingchung.auth0.com/userinfo",
        redirectUri: "http://localhost:4200/callback",
        scope: "openid profile"
    });
    public userProfile:object;

    constructor(public router:Router) {

    };

    public login():void {
        this.auth0.authorize();
    };

    public handleAuthentication():void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = "";
                this.setSession(authResult);
                this.router.navigate(["/home"]);
            } else if (err) {
                this.router.navigate(["/home"]);
                console.log(err);
            }
        });
    };

    private setSession(authResult):void {
        //Set the time that the access token will expire at
        const expiresAt:string = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    };

    public logout():void {
        //Remove tokens and expiry time from localStorage
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        //Go back to the home route
        this.router.navigate(["/"]);
    };

    public isAuthenticated():boolean {
        //Check whether the current time is past the access token's expiry time
        const expiresAt:number = JSON.parse(localStorage.getItem("expires_at"));

        return new Date().getTime() < expiresAt;
    };

    public getProfile(cb):void {
        const accessToken:string = localStorage.getItem("access_token");
        if (!accessToken) {
            throw new Error("Access token must exist to fetch profile");
        }

        const self = this;
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                self.userProfile = profile;
            }

            cb(err, profile);
        });
    };
};