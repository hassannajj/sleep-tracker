import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-mood',
  templateUrl: './edit-mood.component.html',
  styleUrls: ['./edit-mood.component.scss'],
})
export class EditMoodComponent  implements OnInit {
  mood : number = 0;
  @Output() buttonClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}


  setSelectedBatteryLevel(m:number) {
    this.mood = m;
  }

  isActive(m:number) {
    return this.mood === m;
  }

  enterMood() {
    this.buttonClicked.emit(this.mood);
  }
}
