
import {Component, OnInit} from "@angular/core";

//Loading services
import {ChatService} from "../../services/chat.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    constructor(private chatService:ChatService) {

    };

    ngOnInit() {

    };

    private login(type:string) {
        this.chatService.login(type);
    };
};
