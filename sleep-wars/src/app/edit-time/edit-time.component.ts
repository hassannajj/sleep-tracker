import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.scss'],
})
export class EditTimeComponent  implements OnInit {
  selectedSleepTime: string = "12:00 AM";
  selectedWakeTime: string = "12:00 AM";
  @Output() buttonClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

    // This function will be called when the user selects a sleep time
    onSleepTimeSelected(selectedTime: string) {
      this.selectedSleepTime = selectedTime;
    }

    // This function will be called when the user selects a wake time
    onWakeTimeSelected(selectedTime: string) {
      this.selectedWakeTime = selectedTime;
    }

    enterSleep() {
      this.buttonClicked.emit(this.selectedSleepTime + "&" + this.selectedWakeTime);
    }

}
