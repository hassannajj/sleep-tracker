import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-date-view',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.scss'],
})
export class DateViewComponent  implements OnInit {

  @Input() formattedDate: string | undefined;


  offSet = 0

  @Output() dateClicked = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  enterDateOffset(num: number) {
    if (this.offSet + num < 0){
      return;
    }
    this.offSet += num;
    this.dateClicked.emit(this.offSet);
  }

  changeDate(date: string) {

  }
}
