
import {Component, OnInit, OnDestroy} from "@angular/core";
import {FirebaseListObservable} from "angularfire2/database";
import {Subscription} from "rxjs/Rx";

//Loading services
import {PhotosService} from "../../services/photos.service";

@Component({
    selector: "app-photos",
    templateUrl: "./photos.component.html"
})
export class PhotosComponent implements OnInit, OnDestroy {
    private photosSubs: Subscription;
    private photos: FirebaseListObservable<any[]>;
    private removing: boolean = false;
    private quantity: number = 0;

    constructor(private photosService:PhotosService) {

    };

    ngOnInit() {
        this.photos = this.photosService.getLastImages(10);
        this.photosSubs = this.photos.subscribe(data => {
            this.quantity = data.length;
        });
    };

    ngOnDestroy() {
        this.photosSubs.unsubscribe();
    };

    private removeImage(photo: any): void {
        this.removing = true;

        this.photosService.removeImage(photo).then(data => {
            this.removing = false;
        }, err => console.error(err));
    };
};
