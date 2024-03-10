import { Component } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { SleepService } from '../services/sleep.service';
import { FirebaseApp } from '@angular/fire/app';


import 'firebase/firestore'; // Import Firestore explicitly
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  sleepObj = new SleepData();
  sleepHour: number = 0;
  sleepLevel: number = 0;
  



  constructor(private service: SleepService) {}



  addSleepData() {
    //want to populate this with what was taken from html
    this.sleepObj.dateId = new Date(); // do this later
    this.sleepObj.sleepHour = this.sleepHour;
    this.sleepObj.sleepLevel = this.sleepLevel;

    //right side of param is from html retrieval
    console.log("sleep hours: ", this.sleepHour)
    console.log("sleep level: ", this.sleepLevel)
    
    this.service.addSleep(this.sleepObj).then((sleep) => {
      if (sleep) {
        alert('Task Added Successfully');
        this.sleepHour = 0;
        this.sleepLevel = 0;
        //may need to reset date again after
      }
    })
    
  }

}


