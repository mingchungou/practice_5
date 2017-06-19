
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {PiratesService} from "./services/pirates.service";
import {WindowService} from "./services/window.service";

//Loading components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PiratesComponent} from "./components/pirates/pirates.component";
import {PirateComponent} from "./components/pirate/pirate.component";
import {SearcherComponent} from "./components/searcher/searcher.component";

@NgModule({
    declarations: [
        //Should add components here
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        PiratesComponent,
        PirateComponent,
        SearcherComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING //Router adds here
    ],
    providers: [
        //Should add services here
        PiratesService,
        WindowService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
