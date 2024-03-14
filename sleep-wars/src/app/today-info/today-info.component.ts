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
  @Input() hoursSlept: number = 0;
  @Output() editClicked = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {}

  getMoodWord() {
    switch(this.mood) {
      case 7:
        return "Very Energized";
      case 6:
        return "Energized";
      case 5:
        return "Slightly Energized";
      case 4:
        return "Neutral";
      case 5:
        return "Neutral";
      case 6:
        return "Low Energy";
      case 7:
        return "Very Low Energy";
      default:
        return "No mood selected";
    }

  }

  editTime() {
    this.editClicked.emit(0);
  }

  editMood() {
    this.editClicked.emit(1);
  }

  clearData() {
    this.editClicked.emit(2);
  }
}
