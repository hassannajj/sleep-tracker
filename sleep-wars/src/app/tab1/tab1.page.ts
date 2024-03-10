import { Component } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { SleepService } from '../services/sleep.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sleepObj = new SleepData();
  sleepHours: number = 0;
  sleepLevel: number = 0;




  constructor(private service: SleepService) {}

  addSleepData() {
    //want to populate this with what was taken from html
    this.sleepObj.dateId = new Date();
    this.sleepObj.sleepHour = this.sleepHours;
    this.sleepObj.sleepLevel = this.sleepLevel;

    console.log("sleep hours: ", this.sleepHours)
    console.log("sleep level: ", this.sleepLevel)

    this.service.addSleep(this.sleepObj)
  }
}
