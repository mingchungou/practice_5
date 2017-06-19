
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    private items:object[] = [];

    ngOnInit() {
        this.items = [{
            name: "Home",
            routerLink: "home"
        }, {
            name: "Search",
            routerLink: "search"
        }];
    };
};
