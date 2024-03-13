import { Component } from '@angular/core';
import { SleepService } from './services/sleep.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = "sleepApp" //?
  constructor(private service:SleepService) {}

  sleep:any = [];

  /*
  refreshNotes(){
    this.service.getSleep().subscribe((res)=>{

    })
  }
  */


  ngOnInit(){
    //this.refreshNotes();
  }

  // TODO create function to use functions in sleep.service.ts
}
