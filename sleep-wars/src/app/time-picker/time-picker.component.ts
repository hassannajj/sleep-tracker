import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent {
  hours: number[] = this.getHoursList();
  minutes: number[] = this.getMinutesList();
  @Input() selectedHour: number = 12;
  @Input() selectedMinute: number = 0;
  @Input() selectedAmPm: string = 'AM';

  @Output() timeChange = new EventEmitter<string>();

  getHoursList(): number[] {
    return [...Array(12).keys()].map((i) => i + 1);
  }

  getMinutesList(): number[] {
    return [...Array(12).keys()].map((i) => i * 5);
  }


  emitTimeChange() {
    const formattedTime = `${this.selectedHour.toString().padStart(2, '0')}:${this.selectedMinute.toString().padStart(2, '0')} ${this.selectedAmPm}`;
    this.timeChange.emit(formattedTime);
  }
}
