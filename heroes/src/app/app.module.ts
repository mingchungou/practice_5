
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {HeroesService} from "./services/heroes.service";

//Loading pipes
import {KeysPipe} from "./pipes/keys.pipe";

//Loading components
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroComponent} from "./components/heroes/hero.component";


@NgModule({
    declarations: [
        KeysPipe,

        AppComponent,
        HeroesComponent,
        HeroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    providers: [
        HeroesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
