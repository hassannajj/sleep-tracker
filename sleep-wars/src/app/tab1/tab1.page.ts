import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  selectedSleepTime: string | undefined;
  selectedWakeTime: string | undefined;
  formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  constructor() {}

  // This function will be called when the user selects a sleep time
  onSleepTimeSelected(selectedTime: string) {
    this.selectedSleepTime = selectedTime;
    console.log('Selected sleep time:', selectedTime);
  }

  // This function will be called when the user selects a wake time
  onWakeTimeSelected(selectedTime: string) {
    this.selectedWakeTime = selectedTime;
    console.log('Selected wake time:', selectedTime);
  }
}
