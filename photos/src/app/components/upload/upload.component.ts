
import {Component, OnInit} from "@angular/core";

//Loading services
import {PhotosService} from "../../services/photos.service";

//Loading classes
import {FileItem} from "../../models/file-item";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html"
})
export class UploadComponent implements OnInit {
    private onDropZone: boolean = false;
    private enableUpload: boolean = true;
    private files: FileItem[] = [];

    constructor(private photosService: PhotosService) {

    };

    ngOnInit() {

    };

    private clearFiles(): void {
        this.files = [];
        this.enableUpload = true;
    };

    private uploadImages(): void {
        this.enableUpload = false;
        this.photosService.uploadImage(this.files);
    };

    private fileOnDropZone(status: boolean): void {
        this.onDropZone = status;
    };
};
