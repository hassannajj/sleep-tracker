import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'edit-time',
        loadChildren: () => import('../edit-time/edit-time.component').then(c => c.EditTimeComponent)
      },
      {
        path: 'edit-mood',
        loadChildren: () => import('../edit-mood/edit-mood.component').then(c => c.EditMoodComponent)
      },
      {
        path: 'today-info',
        loadChildren: () => import('../today-info/today-info.component').then(c => c.TodayInfoComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
