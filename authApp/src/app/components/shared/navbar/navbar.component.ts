
import {Component, OnInit} from "@angular/core";

//Loading services
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    private items: object[] = [];

    constructor(private authService: AuthService) {
        authService.handleAuthentication();
    };

    ngOnInit() {
        this.items = [{
            name: "Home",
            routerLink: "home",
            login: false
        }, {
            name: "Prices",
            routerLink: "prices",
            login: false
        }, {
            name: "Protected",
            routerLink: "protected",
            login: true
        }];
    };
};
