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

  // Formatted to be : "dayOfWeek, month day"
  formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  constructor() {
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
}
