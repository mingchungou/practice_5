
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading services
import {PhotosService} from "./services/photos.service";

//Loading directives
import {DropFilesDirective} from "./directives/drop-files.directive";

//Loading components
import {AppComponent} from "./app.component";
import {UploadComponent} from "./components/upload/upload.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";

@NgModule({
    declarations: [
        DropFilesDirective,

        AppComponent,
        UploadComponent,
        PhotosComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [
        PhotosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
