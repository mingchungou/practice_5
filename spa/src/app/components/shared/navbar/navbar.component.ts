
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
    private items:object[] = [];

    constructor(private router:Router) {

    };

    ngOnInit() {
        this.items = [{
            name: "Home",
            routerLink: "home"
        }, {
            name: "Pirates",
            routerLink: "pirates"
        }, {
            name: "About",
            routerLink: "about"
        }];
    };

    //Function for navigating to searcher component
    searchPirate(value:string):void {
        if (value.length === 0) {
            return;
        }

        this.router.navigate(["/searcher", value]);
    };
};
