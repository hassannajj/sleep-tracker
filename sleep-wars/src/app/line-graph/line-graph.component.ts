import { I18nPluralPipe } from "@angular/common";
import { Component, ViewChild, ElementRef, AfterViewInit, Input, input } from "@angular/core";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements AfterViewInit {
  
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  @Input() lineData: number [] = [];
  @Input() labelGraph: string | undefined;
  labels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];
  dataAverage: number | undefined;
  
  ngAfterViewInit() {
    this.loadGraphData()
    this.getDataAvg(this.lineData)


    // Load graph data
  
  }

  getDataAvg(arr: number[]){

    // Calculate the sum of all elements in the array
    const sum: number = arr.reduce((acc, val) => acc + val, 0);
    // Calculate the average by dividing the sum by the number of elements
    const avg: number = sum / arr.length;
    // Limit the number of decimal places to one
    const avgWithOneDecimal: number = Number(avg.toFixed(1));
    this.dataAverage = avgWithOneDecimal;
  }

  loadGraphData(){
    if (this.lineCanvas) {
      const ctx = this.lineCanvas.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [{
              label: this.labelGraph,
              data: this.lineData,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

  /*
  constructor(){
    console.log(this.lineData)
  }
  */

}

/*
ngAfterViewInit() {
  const regularArray = Array.from(this.lineData);
  console.log(this.lineData)
  if (this.lineCanvas) {
    const ctx = this.lineCanvas.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Line Graph',
            data: this.lineData,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
*/