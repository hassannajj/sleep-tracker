import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';


import { TimePickerComponent } from '../time-picker/time-picker.component';
import { EditTimeComponent } from '../edit-time/edit-time.component';
import { EditMoodComponent } from '../edit-mood/edit-mood.component';
import { TodayInfoComponent } from '../today-info/today-info.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // DON'T ADD HERE
  ],
  declarations: [Tab1Page, TimePickerComponent, EditTimeComponent, EditMoodComponent, TodayInfoComponent],
})
export class Tab1PageModule {}
