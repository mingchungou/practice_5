
import {Component, ElementRef, OnDestroy} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";
import {Subscription} from "rxjs/Rx";

//Loading services
import {WindowService} from "./services/window.service";

//Inject jQuery
declare var $: any;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnDestroy {
    private routerSubs: Subscription;

    constructor(private router: Router,
                private windowService: WindowService) {
        this.routerSubs = this.router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                let navbarToggler: any = $(".navbar-toggler");

                if (navbarToggler.attr("aria-expanded") === "true") {
                    navbarToggler.trigger("click");
                }

                this.windowService.nativeWindow.scrollTo(0, 0);
            }
        });
    };

    ngOnDestroy() {
        this.routerSubs.unsubscribe();
    };
};
