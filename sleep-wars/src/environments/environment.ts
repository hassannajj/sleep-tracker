// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyBvTIycQwKwUJ-3HOyKGsUrfUFnnofgyg0",
    authDomain: "sleep-track-beb2f.firebaseapp.com",
    projectId: "sleep-track-beb2f",
    storageBucket: "sleep-track-beb2f.appspot.com",
    messagingSenderId: "187047348575",
    appId: "1:187047348575:web:56324a69910e5a0f714eea"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
