
export class FileItem {
    private file: File;
    private fileName: string = "";
    private url: string = "";
    private uploadStatus: boolean = false;
    private progressPor: number = 0;

    constructor(file: File) {
        this.file = file;
        this.fileName = file.name;
    };

    //file setter/getter
    set setFile(file) {
        this.file = file;
    };

    get getFile(): File {
        return this.file;
    };

    //fileName setter/getter
    set setFileName(fileName) {
        this.fileName = fileName;
    };

    get getFileName(): string {
        return this.fileName;
    };

    //url setter/getter
    set setUrl(url) {
        this.url = url;
    };

    get getUrl(): string {
        return this.url;
    };

    //uploadStatus setter/getter
    set setUploadStatus(status) {
        this.uploadStatus = status;
    };

    get getUploadStatus(): boolean {
        return this.uploadStatus;
    };

    //progressPor setter/getter
    set setProgressPor(porcent) {
        this.progressPor = porcent;
    };

    get getProgressPor(): number {
        return this.progressPor;
    }
};
