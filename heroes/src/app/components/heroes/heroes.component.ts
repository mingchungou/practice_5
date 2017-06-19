
import {Component, OnInit} from "@angular/core";

//Loading services
import {HeroesService} from "../../services/heroes.service";

//Loading interfaces
import {Hero} from "../../interfaces/hero.interface";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html"
})
export class HeroesComponent implements OnInit {
    private heroes:object = {};
    private loading:boolean = true;

    constructor(private heroesService:HeroesService) {

    };

    ngOnInit() {
        this.heroesService.getAll().subscribe(data => {
            this.heroes = data;
            this.loading = false;
        }, err => console.log(err));
    };

    private removeHero(key$:string):void {
        this.heroesService.remove(key$).subscribe(data => {
            if (!data) {
                delete this.heroes[key$];
            }
        }, err => console.log(err));
    };
};
