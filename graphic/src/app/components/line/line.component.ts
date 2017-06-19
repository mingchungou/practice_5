
import {Component} from "@angular/core";

@Component({
    selector: "app-line",
    templateUrl: "./line.component.html"
})
export class LineComponent {
    //Option for setting data used in the chart.
    private lineChartData: Array<object> = [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: "Series A"
    }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: "Series B"
    }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: "Series C"
    }];

    //Option for displaying horizontal information at the chart bottom.
    private lineChartLabels: Array<string> = ["January", "February", "March", "April", "May", "June", "July"];

    //Option for setting behavior to the chart.
    private lineChartOptions: object = {
        responsive: true
    };

    //Option for setting specific color to each data.
    private lineChartColors: Array<object> = [];/*[{ // grey
        backgroundColor: "rgba(148,159,177,0.2)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }, { // dark grey
        backgroundColor: "rgba(77,83,96,0.2)",
        borderColor: "rgba(77,83,96,1)",
        pointBackgroundColor: "rgba(77,83,96,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(77,83,96,1)"
    }, { // grey
        backgroundColor: "rgba(148,159,177,0.2)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }];*/

    //Option for displaying legend.
    private lineChartLegend: boolean = true;

    //Option for selecting the figure used to represent the datas.
    private lineChartType: string = "line";

    private randomize(): void {
        let _lineChartData:Array<object> = new Array(this.lineChartData.length);

        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {
                data: new Array(this.lineChartData[i]["data"].length),
                label: this.lineChartData[i]["label"]
            };

            for (let j = 0; j < this.lineChartData[i]["data"].length; j++) {
                _lineChartData[i]["data"][j] = Math.floor((Math.random() * 100) + 1);
            }
        }

        this.lineChartData = _lineChartData;
    };

    private chartClicked(ev: Event): void {
        console.log(ev);
    };

    //Hover event doesn't work
    private chartHovered(ev: Event): void {
        console.log(ev);
    };
};
