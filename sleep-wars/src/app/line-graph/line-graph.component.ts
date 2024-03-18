import { Component, ViewChild, ElementRef, AfterViewInit, Input } from "@angular/core";
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
  dataSum: number | undefined;
  textDescription: string = "";
  
  ngAfterViewInit() {
    // Load graph data
    this.setMonthLabels();
    this.loadGraphData();
  }

  ngOnChanges() {
    // Detect changes in input properties
    if (this.lineData.length > 0 && this.labelGraph) {
      this.getDateInfo(this.lineData);
    }
  }

  getDateInfo(arr: number[]){
    // Calculate average and sum
    const sum: number = arr.reduce((acc, val) => acc + val, 0);
    const avg: number = sum / arr.length;
    // Limit decimal to one place
    const avgWithOneDecimal: number = Number(avg.toFixed(1));
    this.dataAverage = avgWithOneDecimal;
    this.dataSum = sum;

    // Set text description based on labelGraph
    if(this.labelGraph === "Hours"){
      this.textDescription = "Fun fact: You've gotten " + this.dataSum + " hours of sleep total in the last 7 days!";
    }
    else if(this.labelGraph === "Levels"){
      this.textDescription = "On a scale from 1 - 8, this is how you were feeling this week!";
    }
  }

  loadGraphData(){
    if (this.lineCanvas) {
      const ctx = this.lineCanvas.nativeElement.getContext('2d');
      if (ctx) {
        // Reverse labels and lineData arrays before loading graph (recent date will be on right side now)
        const reversedLabels = this.labels.slice().reverse();
        const reversedLineData = this.lineData.slice().reverse();
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: reversedLabels,
            datasets: [{
              label: this.labelGraph,
              data: reversedLineData,
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

  // This function fills in month labels
  setMonthLabels() {
    const day = new Date();
    for(let i = 0; i < 7; i ++){
      const month = (day.getMonth() + 1).toString().padStart(2, '0');
      const date = day.getDate().toString().padStart(2, '0');
      const formattedDate = `${month}/${date}`;
      console.log(formattedDate);
      this.labels[i] = formattedDate;
      day.setDate(day.getDate() - 1);
    }
  }
}