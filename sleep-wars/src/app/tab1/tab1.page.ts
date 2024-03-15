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
  sleepDateOffset: number = 0; // offset to change the day, // NOTES: 0 = today, 1 = yesterday
  

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
    let [sleepHour, sleepMinute, sleepPeriod]: string[] = this.selectedSleepTime.split(/:| /);
    let sleepHourInt: number = parseInt(sleepHour);
    let sleepMinuteInt: number = parseInt(sleepMinute);
    if (sleepPeriod === 'PM' && sleepHourInt !== 12) {
        sleepHourInt += 12;
    } else if (sleepPeriod === 'AM' && sleepHourInt === 12) {
        sleepHourInt = 0;
    }

    // Convert wake time to military time
    let [wakeHour, wakeMinute, wakePeriod]: string[] = this.selectedWakeTime.split(/:| /);
    let wakeHourInt: number = parseInt(wakeHour);
    let wakeMinuteInt: number = parseInt(wakeMinute);
    if (wakePeriod === 'PM' && wakeHourInt !== 12) {
        wakeHourInt += 12;
    } else if (wakePeriod === 'AM' && wakeHourInt === 12) {
        wakeHourInt = 0;
    }

    // Calculate the hours and minutes slept
    let hrsSlept: number;
    let minutesSlept: number;
    if (wakeHourInt < sleepHourInt || (wakeHourInt === sleepHourInt && wakeMinuteInt < sleepMinuteInt)) {
        hrsSlept = (24 - sleepHourInt) + wakeHourInt;
        if (wakeMinuteInt < sleepMinuteInt) {
            hrsSlept--;
            minutesSlept = 60 - (sleepMinuteInt - wakeMinuteInt);
        } else {
            minutesSlept = wakeMinuteInt - sleepMinuteInt;
        }
    } else {
        hrsSlept = wakeHourInt - sleepHourInt;
        minutesSlept = wakeMinuteInt - sleepMinuteInt;
    }

    // Output the result
    console.log('hrsSlept:', hrsSlept);
    this.hoursSlept = parseFloat((hrsSlept + (minutesSlept / 60)).toFixed(2));
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
    this.sleepObj.dateId = new Date();
    this.sleepObj.dateId.setDate(this.sleepObj.dateId.getDate() - this.sleepDateOffset);


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
      
      //this.sleepDateOffset = 0;
      //NOTES: I left this out bcs I'm assuming when you delete you stil stay on the same day to log after deleting the entry again
      // if you want to have the day restart to current day when pressing clear data button, uncomment the line of code

      this.editTime = true;
      this.editMood = false;
      this.newDay = true;

    }).catch((error) => {
      console.error('Error adding sleep data:', error);
    });
  }
}
