
import {RouterModule, Routes} from "@angular/router";

//Loading components
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PiratesComponent} from "./components/pirates/pirates.component";
import {PirateComponent} from "./components/pirate/pirate.component";
import {SearcherComponent} from "./components/searcher/searcher.component";

const APP_ROUTES: Routes = [{
    path: "home",
    component: HomeComponent
}, {
    path: "about",
    component: AboutComponent
}, {
    path: "pirates",
    component: PiratesComponent
}, {
    path: "pirate/:id",
    component: PirateComponent
}, {
    path: "searcher/:value",
    component: SearcherComponent
}, {//Option that executes when all previous ones don't match to request path
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
}];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
