import { Component } from '@angular/core';

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
    this.editMood = true;
  }

  populateMood(m: number) {
    this.mood = m;

    console.log('testButtonMood:', this.mood);

    this.editMood = false;
  }
}
