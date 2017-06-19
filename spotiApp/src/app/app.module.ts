
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {WindowService} from "./services/window.service";
import {SpotifyService} from "./services/spotify.service";

//Loading pipes
import {UnknownImagePipe} from "./pipes/unknown-image.pipe";
import {SecureDomPipe} from "./pipes/securedom.pipe";

//Loading components
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {ArtistComponent} from "./components/artist/artist.component";

@NgModule({
    declarations: [
        UnknownImagePipe,
        SecureDomPipe,

        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        ArtistComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        WindowService,
        SpotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
