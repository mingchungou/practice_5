
import {RouterModule, Routes} from "@angular/router";

//Loading components
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroComponent} from "./components/heroes/hero.component";

const APP_ROUTES: Routes = [{
    path: "heroes",
    component: HeroesComponent
}, {
    path: "hero/:option",
    component: HeroComponent
}, {
    path: "**",
    pathMatch: "full",
    redirectTo: "heroes"
}];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
