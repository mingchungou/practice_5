
import {Component, ElementRef, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

//Loading services
import {ChatService} from "../../services/chat.service";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html"
})
export class ChatComponent implements OnDestroy {
    private messagesGetSubs: Subscription;
    private message: string = "";

    constructor(private chatService: ChatService,
                private el: ElementRef) {
        this.messagesGetSubs = chatService.getMessages().subscribe(() => {
            setTimeout(() => {
                let messageContent = el.nativeElement.querySelector(".message-content");
                messageContent.scrollTop = messageContent.scrollHeight;
            }, 10);
        });
    };

    ngOnDestroy() {
        this.messagesGetSubs.unsubscribe();
    };

    private send(): void {
        if (this.message.length === 0) {
            return;
        }

        this.chatService.addMessage(this.message).then(() => {
            this.message = "";
        }, err => console.log(err));
    };
};
