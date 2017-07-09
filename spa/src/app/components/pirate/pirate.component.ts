
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Subscription} from "rxjs/Rx";

//Loading services
import {PiratesService} from "../../services/pirates.service";

//Loading interfaces
import {Pirate} from "../../interfaces/pirate.interface";

@Component({
    selector: "app-pirate",
    templateUrl: "./pirate.component.html"
})
export class PirateComponent implements OnInit, OnDestroy {
    private paramsSubs: Subscription;
    private pirate: Pirate = null;

    constructor(private activatedRoute: ActivatedRoute,
                private piratesService: PiratesService,
                private location: Location) {

    };

    ngOnInit() {
        this.paramsSubs = this.activatedRoute.params.subscribe((params: {id: string}) => {
            this.pirate = this.piratesService.getPirateById(Number(params.id));
        });
    };

    ngOnDestroy() {
        this.paramsSubs.unsubscribe();
    };
};
