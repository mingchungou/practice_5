
import {Component, OnInit, OnDestroy} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

//Loading services
import {HeroesService} from "../../services/heroes.service";

//Loading interfaces
import {Hero} from "../../interfaces/hero.interface";

@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html"
})
export class HeroComponent implements OnInit, OnDestroy {
    private paramsSubs: Subscription;
    private heroGetSubs: Subscription;
    private heroAddSubs: Subscription;
    private heroUpdateSubs: Subscription;
    private hero: Hero = {
        name: "",
        from: "",
        intro: ""
    };
    private heroID: string = "";

    constructor(private heroesService: HeroesService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        this.paramsSubs = this.activatedRoute.params.subscribe(params => {
            this.heroID = params["option"];

            if (this.heroID !== "add") {
                this.heroGetSubs = this.heroesService.get(this.heroID).subscribe(data => {
                    this.hero = data;
                }, err => console.log(err));
            }
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.paramsSubs.unsubscribe();

        if (this.heroGetSubs) {
            this.heroGetSubs.unsubscribe();
        }

        if (this.heroAddSubs) {
            this.heroAddSubs.unsubscribe();
        }

        if (this.heroUpdateSubs) {
            this.heroUpdateSubs.unsubscribe();
        }
    };

    private save(form: NgForm): void {
        if (this.heroID === "add") {
            this.heroAddSubs = this.heroesService.add(this.hero).subscribe(data => {
                form.reset();
                this.router.navigate(["/hero", data.name]);
            }, err => console.log(err));
        } else {
            this.heroUpdateSubs = this.heroesService.update(this.hero, this.heroID).subscribe(
                data => {
                    console.log(data);
                },
                err => console.log(err)
            );
        }
    };

    private addHero(form: NgForm): void {
        form.reset();
        this.router.navigate(["/hero", "add"]);
    };
};
