
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    private items: object[] = [];

    constructor() {

    };

    ngOnInit() {
        this.items = [{
            name: "Photos",
            routerLink: "photos"
        }, {
            name: "Upload",
            routerLink: "upload"
        }];
    };
};
