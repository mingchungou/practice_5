
import {Component} from "@angular/core";

//Loading services
import {MapsService} from "./services/maps.service";

import {Marker} from "./interfaces/marker.interface";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title:string = "My first AGM project";
    lat:number = 10.037004;
    lng:number = -84.159313;
    zoom:number = 17;
    markerSelected:any = null;

    constructor(private mapsService:MapsService) {
        mapsService.loadMarker();
    };

    //Function for adding new marker to list.
    setMarker(ev):void {
        let newMarker:Marker = {
            title: "No title",
            lat: ev.coords.lat,
            lng: ev.coords.lng,
            draggable: true
        };

        this.mapsService.addMarker(newMarker);
    };

    //Function for removing a marker.
    removeMarker(index:number):void {
        this.markerSelected = null;
        this.mapsService.removeMarker(index);
    };

    //Function for showing the marker info when clicking a marker.
    clickMarker(marker:Marker, i:number):void {
        this.markerSelected = marker;
    };

    //Function for saving new position of marker after dragging it end.
    dragEndMarker(marker:Marker, ev):void {
        console.log(marker, ev);
        let lat:number = ev.coords.lat;
        let lng:number = ev.coords.lng;

        if (marker.lat !== lat || marker.lng !== lng) {
            marker.lat = lat;
            marker.lng = lng;

            this.mapsService.saveMarker();
        }
    };

    //Function for saving data of marker.
    saveMarker():void {
        this.markerSelected = null;
        this.mapsService.saveMarker();
    };
};
