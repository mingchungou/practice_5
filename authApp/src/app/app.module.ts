
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";

//Loading components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {PricesComponent} from "./components/prices/prices.component";
import {ProtectedComponent} from "./components/protected/protected.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        PricesComponent,
        ProtectedComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
