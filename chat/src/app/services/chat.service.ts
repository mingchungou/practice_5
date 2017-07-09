
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Observable} from "rxjs/Rx";

//Loading interfaces
import {Message} from "../interfaces/message.interface";

@Injectable()
export class ChatService {
    public chats: FirebaseListObservable<any[]>;
    public user: any;

    constructor(private db: AngularFireDatabase,
                public angularFireAuth: AngularFireAuth) {
        let userStored: string = localStorage.getItem("user");

        if (userStored) {
            this.user = JSON.parse(userStored);
        } else {
            this.user = null;
        }
    };

    public getMessages(): Observable<any> {
        this.chats = this.db.list("/chats", {
            query: {
                limitToLast: 20,
                orderByKey: true
            }
        });

        return this.chats;
    };

    public addMessage(text: string): firebase.database.ThenableReference {
        let message: Message = {
            name: this.user.displayName,
            message: text,
            uid: this.user.uid
        };

        return this.chats.push(message);
    };

    public login(type: string): void {
        let loginObject: any;

        if (type === "google") {
            loginObject = firebase.auth.GoogleAuthProvider;
        } else {
            loginObject = firebase.auth.TwitterAuthProvider;
        }

        this.angularFireAuth.auth.signInWithPopup(new loginObject()).then(data => {
            this.user = data.user;
            localStorage.setItem("user", JSON.stringify(data.user));
        });
    };

    public logout(): void {
        localStorage.removeItem("user");
        this.user = null;
        this.angularFireAuth.auth.signOut();
    };
};
