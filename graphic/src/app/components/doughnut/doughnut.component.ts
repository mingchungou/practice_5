
import {Component} from "@angular/core";

@Component({
    selector: "app-doughnut",
    templateUrl: "./doughnut.component.html"
})
export class DoughnutComponent {
    //Option for displaying data information on the top of chart.
    private doughnutChartLabels: Array<string> = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];

    //Option for setting data used in the chart.
    private doughnutChartData: Array<number> = [350, 450, 100];

    //Option for selecting the figure used to represent the datas.
    private doughnutChartType: string = "doughnut";

    private chartClicked(ev: Event): void {
        console.log(ev);
    };

    private chartHovered(ev: Event): void {
        console.log(ev);
    };

    private randomize(): void {
        this.doughnutChartData = [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ];
    };
};
