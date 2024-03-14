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
  hoursSlept: number = 0;
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

    // Populate hoursSlept
    this.calculateHoursSlept();

    this.editTime = false;
    if (this.newDay) { // If it's a new day, then we want to edit the mood
      this.newDay = false;
      this.editMood = true;
    }
    else {
      // If it's not a new day, then we want to save the data immedietly instead of going to the mood edit page
      this.saveData();
    }

  }

  populateMood(m: number) {
    this.mood = m;

    console.log('testButtonMood:', this.mood);

    this.editMood = false;


    this.saveData();
  }

  changeState(code: number) {
    // if code == 0, then we are changing the editTime state
    // if code == 1, then we are changing the editMood state

    if (code == 0) {
      this.editTime = true;
      this.editMood = false;
    } else if (code == 1) {
      this.editTime = false;
      this.editMood = true;
    }
    else if (code == 2) {
      this.clearData();
    }
  }


  calculateHoursSlept() {
    //// Calculate hoursSlept

    // First split the sleep time into hours, minutes, and AM/PM
    const sleepTimeSplit = this.selectedSleepTime.split(':');
    const sleepHour = parseInt(sleepTimeSplit[0]);
    const sleepMinute = parseInt(sleepTimeSplit[1].split(' ')[0]);
    const sleepAmPm = sleepTimeSplit[1].split(' ')[1];

    console.log('sleepHour:', sleepHour, 'sleepMinute:', sleepMinute, 'sleepAmPm:', sleepAmPm);

    // Then split the wake time into hours, minutes, and AM/PM
    const wakeTimeSplit = this.selectedWakeTime.split(':');
    const wakeHour = parseInt(wakeTimeSplit[0]);
    const wakeMinute = parseInt(wakeTimeSplit[1].split(' ')[0]);
    const wakeAmPm = wakeTimeSplit[1].split(' ')[1];

    console.log('wakeHour:', wakeHour, 'wakeMinute:', wakeMinute, 'wakeAmPm:', wakeAmPm);

    // Calculate the hours slept
    if (sleepAmPm === 'PM' && wakeAmPm === 'AM') {
      this.hoursSlept = (24 - sleepHour) + wakeHour;
    } else {
      this.hoursSlept = wakeHour - sleepHour;
    }

    console.log('hoursSlept:', this.hoursSlept);
  }


  saveData() {
    // Save the data to the backend
    this.sleepLevel = this.mood;
    this.sleepHour = this.hoursSlept;
    this.addSleepData();
  }

  clearData() {
    // Clear the data from the backend
    this.deleteCurrentData();
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
      this.selectedSleepTime = "12:00 AM";
      this.selectedWakeTime= "12:00 AM";
      this.mood = 0;
      this.sleepHour = 0;
      this.sleepLevel = 0;

      this.editTime = true;
      this.editMood = false;
      this.newDay = true;

    }).catch((error) => {
      console.error('Error adding sleep data:', error);
    });
  }
}
