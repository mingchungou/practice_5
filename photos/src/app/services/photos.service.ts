
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import * as firebase from "firebase";

//Loading classes
import {FileItem} from "../models/file-item";

@Injectable()
export class PhotosService {
    private photosDir: string = "img";
    public filesUploadStatus: boolean = false;
    private files: FileItem[] = [];

    constructor(private db: AngularFireDatabase) {

    };

    //Function for getting a specific quantity of images.
    public getLastImages(quantity: number): FirebaseListObservable<any[]> {
        return this.db.list(`/${this.photosDir}`, {
            query: {
                limitToLast: quantity
            }
        });
    };

    //Function for removing an specific image from storage and database of Firebase.
    public removeImage(image: any): firebase.Promise<any> {
        let storageRef: firebase.storage.Reference = firebase.storage().ref();

        return storageRef.child(`${this.photosDir}/${image.fileName}`).delete().then(() => {
            this.db.list(`/${this.photosDir}`).remove(image.$key).then(() => {
                console.log("Image removed");
            }, err => console.error(err));
        }, err => console.error(err));
    };

    //Function for checking if all files are already uploaded.
    private isAllFilesUploaded() {
        let status: boolean = true;

        for (let file of this.files) {
            if (file.getUploadStatus) {
                status = false;
                break;
            }
        }

        if (status) {
            this.filesUploadStatus = false;
            this.files = [];
        }
    };

    private saveImage(file: FileItem): void {
        this.db.list(`/${this.photosDir}`).push({
            fileName: file.getFileName,
            url: file.getUrl
        }).then(() => {
            file.setUploadStatus = false;
            this.isAllFilesUploaded();
        }, err => console.error(err));
    };

    //Function for adding and storing images into Firebase.
    public uploadImage(files: FileItem[]): void {
        let storageRef: firebase.storage.Reference = firebase.storage().ref();
        this.filesUploadStatus = true;
        this.files = files;

        for (let file of files) {
            file.setUploadStatus = true;
            let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.photosDir}/${file.getFileName}`).put(file.getFile);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
                file.setProgressPor = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, err => console.error(err), () => {
                file.setUrl = uploadTask.snapshot.downloadURL;
                this.saveImage(file);
            });
        }
    };
};
