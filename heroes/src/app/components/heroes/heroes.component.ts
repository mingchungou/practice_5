
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

//Loading services
import {HeroesService} from "../../services/heroes.service";

//Loading interfaces
import {Hero} from "../../interfaces/hero.interface";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html"
})
export class HeroesComponent implements OnInit, OnDestroy {
    private heroesGetSubs: Subscription;
    private heroeDeleteSubs: Subscription;
    private heroes: object = {};
    private loading: boolean = true;

    constructor(private heroesService: HeroesService) {

    };

    ngOnInit() {
        this.heroesGetSubs = this.heroesService.getAll().subscribe(data => {
            this.heroes = data;
            this.loading = false;
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.heroesGetSubs.unsubscribe();

        if (this.heroeDeleteSubs) {
            this.heroeDeleteSubs.unsubscribe();
        }
    };

    private removeHero(key$: string): void {
        this.heroeDeleteSubs = this.heroesService.remove(key$).subscribe(data => {
            if (!data) {
                delete this.heroes[key$];
            }
        }, err => console.log(err));
    };
};
