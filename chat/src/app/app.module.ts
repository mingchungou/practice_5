
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

//Loading services
import {ChatService} from "./services/chat.service";

//Loading components
import {AppComponent} from "./app.component";
import {ChatComponent} from "./components/chat/chat.component";
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [
        ChatService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
