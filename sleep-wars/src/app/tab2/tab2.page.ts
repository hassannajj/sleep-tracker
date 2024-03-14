import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  sleepHoursSet: number[] = [];
  sleepLevelSet: number[] = [];
  graphLabels: string[] = ["Hours", "Levels"];
  dataLoaded: boolean = false; // Flag to track data loading

  constructor(private service: SleepService) {}

  ngOnInit() {
    this.getLastSevenDaysData();
  }

  async getLastSevenDaysData() {
    for (let i = 0; i < 7; i++) {
      let sleepObj = new SleepData();
      sleepObj.dateId.setDate(sleepObj.dateId.getDate() - i);
    
      try {
        // Call getSleep function from the SleepService
        const sleepData = await this.service.getSleep(sleepObj.dateString());
        
        // Log the entire sleep data object
        console.log(sleepData);
        console.log('Sleep hours:', sleepData["sleepHour"]);
        console.log('Sleep level:', sleepData["sleepLevel"]);
        
        // Assigning sleep data to class variables
        this.sleepHoursSet.push(sleepData["sleepHour"]);
        this.sleepLevelSet.push(sleepData["sleepLevel"]);
      } catch (error) { 
        // if date does not exist, just mark it zero in the data
        this.sleepHoursSet.push(0)
        this.sleepLevelSet.push(0)
      }
    }
    this.dataLoaded = true; // Set flag to indicate data loading is complete
  }
}
