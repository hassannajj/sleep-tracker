import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineGraphComponent } from './line-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, NgApexchartsModule],
  declarations: [LineGraphComponent],
  exports: [LineGraphComponent, NgApexchartsModule]
})
export class LineGraphComponentModule {}
