
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

//Loading services
import {YoutubeService} from "./services/youtube.service";

//Loading pipes
import {SecureYoutube} from "./pipes/secure-youtube.pipe";

//Loading components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
    declarations: [
        SecureYoutube,

        AppComponent,
        NavbarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        YoutubeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
