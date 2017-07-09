
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    private items: object[] = [];

    constructor(private router: Router) {

    };

    ngOnInit() {
        this.items = [{
            name: "Home",
            routerLink: "home"
        }, {
            name: "Search",
            routerLink: "search"
        }];
    };

    private searchMovie(value: string): void {
        if (value.length === 0) {
            return;
        }

        this.router.navigate(["/search", value]);
    };
};
