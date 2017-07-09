
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

//Loading services
import {PiratesService} from "../../services/pirates.service";

//Loading interfaces
import {Pirate} from "../../interfaces/pirate.interface";

@Component({
    selector: "app-pirate",
    templateUrl: "./pirates.component.html"
})
export class PiratesComponent implements OnInit {
    private pirates: Pirate[] = [];

    constructor(private piratesService: PiratesService,
                private router: Router) {

    };

    //Function that executes after constructor function
    ngOnInit() {
        this.pirates = this.piratesService.getPirates();
    };

    //Function for navigating to pirate component
    private navigateToPirate(id: number): void {
        this.router.navigate(["/pirate", id]);
    };
};
