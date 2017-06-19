
import {Component, OnInit, ElementRef} from "@angular/core";

//Loading services
import {ChatService} from "../../services/chat.service";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html"
})
export class ChatComponent implements OnInit {
    private message:string = "";

    constructor(public chatService:ChatService,
                private el:ElementRef) {
        chatService.getMessages().subscribe(() => {
            setTimeout(() => {
                let messageContent = el.nativeElement.querySelector(".message-content");
                messageContent.scrollTop = messageContent.scrollHeight;
            }, 10);
        });
    };

    ngOnInit() {

    };

    private send():void {
        if (this.message.length === 0) {
            return;
        }

        this.chatService.addMessage(this.message).then(() => {
            this.message = "";
        }, err => console.log(err));
    };
};
