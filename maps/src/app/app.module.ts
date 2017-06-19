
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgmCoreModule} from "@agm/core";

import {MapsService} from "./services/maps.service";

//Loading components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyDJ-xzxvlIvgI5o4dJvBYGCMM-Vcz7C6x4"
        })
    ],
    providers: [
        MapsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
