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
