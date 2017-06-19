
import {Component} from "@angular/core";

@Component({
    selector: "app-radar",
    templateUrl: "./radar.component.html"
})
export class RadarComponent {
    //Option for displaying label of each data.
    private radarChartLabels: Array<string> = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    //Option for setting data used in the chart.
    private radarChartData: Array<object> = [{
        data: [65, 59, 90, 81, 56, 55, 40],
        label: "Series A"
    }, {
        data: [28, 48, 40, 19, 96, 27, 100],
        label: "Series B"
    }];

    //Option for selecting the figure used to represent the datas.
    private radarChartType: string = "radar";

    private chartClicked(ev: Event): void {
        console.log(ev);
    };

    private chartHovered(ev: Event): void {
        console.log(ev);
    };
};
