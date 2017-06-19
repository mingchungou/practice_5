
import {Component, ElementRef} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";

//Loading services
import {WindowService} from "./services/window.service";

//Inject jQuery
declare var $:any;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(private router:Router,
                private windowService:WindowService) {
        this.router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                let navbarToggler:any = $(".navbar-toggler");

                if (navbarToggler.attr("aria-expanded") === "true") {
                    navbarToggler.trigger("click");
                }

                this.windowService.nativeWindow.scrollTo(0, 0);
            }
        });
    };
};
