
import {Injectable} from "@angular/core";

import {Marker} from "../interfaces/marker.interface";

@Injectable()
export class MapsService {
    public markers:Marker[] = [];

    constructor() {

    };

    //Function for adding new marker to the list.
    public addMarker(marker:Marker):void {
        this.markers.push(marker);
        this.saveMarker();
    };

    //Function for remove a marker fron the list.
    public removeMarker(index:number):void {
        this.markers.splice(index, 1);
        this.saveMarker();
    };

    //Function for saving the marker list to localStorage.
    public saveMarker():void {
        localStorage.setItem("markers", JSON.stringify(this.markers));
    };

    //Function for loading the marker list stored in localStorage.
    public loadMarker():void {
        if (localStorage.getItem("markers")) {
            this.markers = JSON.parse(localStorage.getItem("markers"));
        } else {
            this.markers = [];
        }
    };
};
