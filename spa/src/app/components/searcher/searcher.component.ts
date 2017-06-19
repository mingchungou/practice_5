
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

//Loading services
import {PiratesService} from "../../services/pirates.service";

//Loading interfaces
import {Pirate} from "../../interfaces/pirate.interface";

@Component({
    selector: "app-searcher",
    templateUrl: "./searcher.component.html"
})
export class SearcherComponent implements OnInit {
    private pirates:Pirate[] = [];
    private valueSearched:string = "";

    constructor(private activatedRoute:ActivatedRoute,
                private piratesService:PiratesService) {

    };

    ngOnInit() {
        this.activatedRoute.params.subscribe((params:{value:string}) => {
            this.valueSearched = params.value;
            this.pirates = this.piratesService.searchPirate(this.valueSearched);
        });
    };
};
