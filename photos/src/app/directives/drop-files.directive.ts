
import {Directive, EventEmitter, ElementRef, HostListener, Input, Output} from "@angular/core";

//Loading models
import {FileItem} from "../models/file-item";

@Directive({
    selector: "[ngDropFiles]"
})
export class DropFilesDirective {
    @Input()
    files: FileItem[] = [];

    @Output()
    fileOn: EventEmitter<boolean> = new EventEmitter();

    constructor(private el: ElementRef) {

    };

    /*@HostListener("dragenter", ["$event"])
    public onDragEnter(ev): void {
        this.fileOn.emit(true);
    };*/

    @HostListener("dragleave", ["$event"])
    public onDragLeave(ev: any): void {
        this.fileOn.emit(false);
    };

    @HostListener("dragover", ["$event"])
    public onDragOver(ev: any): void {
        let data: DataTransfer = this.getDataTransfer(ev);

        data.dropEffect = "copy";
        this.stopEvent(ev);
        this.fileOn.emit(true);
    };

    @HostListener("drop", ["$event"])
    public onDrop(ev: any): void {
        let data: DataTransfer = this.getDataTransfer(ev);

        if (!data) {
            return;
        }

        this.addFile(data.files);
        this.stopEvent(ev);
        this.fileOn.emit(false);
    };

    //Function for stopping default event and its propagation.
    private stopEvent(ev: any): void {
        ev.preventDefault();
        ev.stopPropagation();
    };

    private getDataTransfer(ev: any): DataTransfer {
        return ev.dataTransfer ? ev.dataTransfer : ev.originalEvent.dataTransfer;
    };

    private fileDropped(fileName: string): boolean {
        for (let i in this.files) {
            let file: FileItem = this.files[i];

            if (file.getFileName === fileName) {
                console.log("File already exists", fileName);
                return true;
            }
        }

        return false;
    };

    private isImage(type: string): boolean {
        return (type == "" || type == undefined) ? false : type.startsWith("image");
    };

    //Function for checking if file doesn't exist in array and the file is an image.
    private isFileUploadable(file: File): boolean {
        if (!this.fileDropped(file.name) && this.isImage(file.type)) {
            return true;
        }

        return false;
    };

    //Function for adding files to array
    private addFile(fileList: FileList): void {
        for (let property in Object.getOwnPropertyNames(fileList)) {
            let temp: File = fileList[property];

            if (this.isFileUploadable(temp)) {
                let file: FileItem = new FileItem(temp);
                this.files.push(file);
            }
        }
    };
};
