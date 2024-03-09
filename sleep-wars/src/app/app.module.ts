import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// TODO add firebase imports here
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SleepService } from './services/sleep.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // TODO add firebase stuff here (https://www.npmjs.com/package/@angular/fire)
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SleepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
