import { Component } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { SleepService } from '../services/sleep.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sleepHoursSet: any[] = [];
  sleepLevelSet: any[] = [];

  constructor(private service: SleepService) {
    this.getSevenDaysSleepHours();
  }


  getSevenDaysSleepHours(){
    let curSleepObj = new SleepData();

    for (let i = 0; i < 7; i++) {
      curSleepObj = this.service.getSleep(curSleepObj.dateString())
      //this.sleepHoursSet.push()

    }
    
   

    
  }

}
