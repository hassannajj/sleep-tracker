import { Component } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { SleepService } from '../services/sleep.service';
import { FirebaseApp } from '@angular/fire/app';


import 'firebase/firestore'; // Import Firestore explicitly
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  selectedSleepTime: string = "12:00 AM";
  selectedWakeTime: string = "12:00 AM";
  editTime: boolean = true;

  mood : number = 0;
  editMood: boolean = false;
  newDay: boolean = true;

  //Backend stuff
  sleepObj = new SleepData();
  // These are the two variables I use to get data from html input
  sleepHour: number = 0;
  sleepLevel: number = 0;

  // Formatted to be : "dayOfWeek, month day"
  formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  constructor(private service: SleepService) { // data type for parsing data to DB
  }


  populateSleepTime(sleepTime: string) {
    // Get child component sleep time variable
    const splitArray = sleepTime.split('&');
    this.selectedSleepTime = splitArray[0];
    this.selectedWakeTime = splitArray[1];

    console.log('testButtonSleep:', this.selectedSleepTime);
    console.log('testButtonWake:', this.selectedWakeTime);

    this.editTime = false;
    if (this.newDay) {
      this.newDay = false;
      this.editMood = true;
    }
  }

  populateMood(m: number) {
    this.mood = m;

    console.log('testButtonMood:', this.mood);

    this.editMood = false;
  }

  changeEditState(code: number) {
    // if code == 0, then we are changing the editTime state
    // if code == 1, then we are changing the editMood state

    if (code == 0) {
      this.editTime = true;
      this.editMood = false;
    } else if (code == 1) {
      this.editTime = false;
      this.editMood = true;
    }
  }


  addSleepData() {
    //want to populate this with what was taken from html (right side)
    //this.sleepObj.dateId = new Date(); // do this later
    this.sleepObj.sleepHour = this.sleepHour;
    this.sleepObj.sleepLevel = this.sleepLevel;

    // DEBUGGING
    //console.log("sleep hours: ", this.sleepHour)
    //console.log("sleep level: ", this.sleepLevel)
    
    this.service.addSleep(this.sleepObj).then(() => {
      alert('Sleep Log Added Successfully');

    }).catch((error) => {
      console.error('Error adding sleep data:', error);
      // Handle error appropriately, such as displaying an error message to the user
    });
  }

  deleteCurrentData() { 
    this.service.deleteSleep(this.sleepObj).then(() => {
      alert('Sleep Log Deleted Successfully');
      this.sleepHour = 0;
      this.sleepLevel = 0;

    }).catch((error) => {
      console.error('Error adding sleep data:', error);
    });
  }
}
