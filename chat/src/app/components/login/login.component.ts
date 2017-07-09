
import {Component} from "@angular/core";

//Loading services
import {ChatService} from "../../services/chat.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(private chatService: ChatService) {

    };

    private login(type: string) {
        this.chatService.login(type);
    };
};
