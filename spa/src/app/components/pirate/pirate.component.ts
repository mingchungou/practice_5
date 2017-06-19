
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common"

//Loading services
import {PiratesService} from "../../services/pirates.service";

//Loading interfaces
import {Pirate} from "../../interfaces/pirate.interface";

@Component({
    selector: "app-pirate",
    templateUrl: "./pirate.component.html"
})
export class PirateComponent implements OnInit {
    private pirate:Pirate = null;

    constructor(private activatedRoute:ActivatedRoute,
                private piratesService:PiratesService,
                private location:Location) {

    };

    ngOnInit() {
        this.activatedRoute.params.subscribe((params:{id:string}) => {
            this.pirate = this.piratesService.getPirateById(Number(params.id));
        });
    };
};
