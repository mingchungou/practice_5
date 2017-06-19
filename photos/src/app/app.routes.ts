
import {RouterModule, Routes} from "@angular/router";

//Loading components
import {PhotosComponent} from "./components/photos/photos.component";
import {UploadComponent} from "./components/upload/upload.component";

const APP_ROUTES: Routes = [{
    path: "photos",
    component: PhotosComponent
}, {
    path: "upload",
    component: UploadComponent
}, {
    path: "**",
    pathMatch: "full",
    redirectTo: "photos"
}];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
