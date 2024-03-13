import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-today-info',
  templateUrl: './today-info.component.html',
  styleUrls: ['./today-info.component.scss'],
})
export class TodayInfoComponent  implements OnInit {
  @Input() sleepTime: string = "";
  @Input() wakeTime: string = "";
  @Input() mood: number = 0;
  @Output() editClicked = new EventEmitter<number>();
  hoursSlept: number = 0;

  constructor() {

  }

  ngOnInit() {
    this.calculateHoursSlept();
  }

  calculateHoursSlept() {
    //// Calculate hoursSlept

    // First split the sleep time into hours, minutes, and AM/PM
    const sleepTimeSplit = this.sleepTime.split(':');
    const sleepHour = parseInt(sleepTimeSplit[0]);
    const sleepMinute = parseInt(sleepTimeSplit[1].split(' ')[0]);
    const sleepAmPm = sleepTimeSplit[1].split(' ')[1];

    console.log('sleepHour:', sleepHour, 'sleepMinute:', sleepMinute, 'sleepAmPm:', sleepAmPm);

    // Then split the wake time into hours, minutes, and AM/PM
    const wakeTimeSplit = this.wakeTime.split(':');
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

  editTime() {
    this.editClicked.emit(0);
  }

  editMood() {
    this.editClicked.emit(1);
  }
}
