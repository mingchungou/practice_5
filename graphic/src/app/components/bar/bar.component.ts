
import {Component} from "@angular/core";

@Component({
    selector: "app-bar",
    templateUrl: "./bar.component.html"
})
export class BarComponent {
    //Option for setting behavior to the chart.
    private barChartOptions: object = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    //Option for displaying horizontal information at the chart bottom.
    private barChartLabels: Array<string> = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];

    //Option for selecting the figure used to represent the datas.
    private barChartType: string = "bar";

    //Option for displaying legend.
    private barChartLegend: boolean = true;

    //Option for setting data used in the chart.
    private barChartData: Array<object> = [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
    }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B'
    }];

    private chartClicked(ev: Event): void {
        console.log(ev);
    };

    //Hover event doesn't work.
    private chartHovered(ev: Event): void {
        console.log(ev);
    };

    private randomize(): void {
        // Only Change 3 values
        let data: Array<any> = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        let clone: Array<object> = JSON.parse(JSON.stringify(this.barChartData));

        clone[0]["data"] = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
};
