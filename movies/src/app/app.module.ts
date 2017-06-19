
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule} from "@angular/http";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {MoviesService} from "./services/movies.service";

//Loading pipes
import {ImagePipe} from "./pipes/image.pipe";

//Loading components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {GalleryComponent} from "./components/shared/gallery/gallery.component";
import {HomeComponent} from "./components/home/home.component";
import {MovieComponent} from "./components/movie/movie.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
    declarations: [
        ImagePipe,

        AppComponent,
        NavbarComponent,
        GalleryComponent,
        HomeComponent,
        MovieComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        APP_ROUTING
    ],
    providers: [
        MoviesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
