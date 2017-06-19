
import {RouterModule, Routes} from "@angular/router";

//Loading components
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {MovieComponent} from "./components/movie/movie.component";

const APP_ROUTES: Routes = [{
    path: "home",
    component: HomeComponent
}, {
    path: "search",
    component: SearchComponent
}, {
    path: "search/:text",
    component: SearchComponent
}, {
    path: "movie/:id/:page",
    component: MovieComponent
}, {
    path: "movie/:id/:page/:text",
    component: MovieComponent
}, {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
}];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
