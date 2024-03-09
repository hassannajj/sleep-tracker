import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SleepService {

	
	constructor(private fs:Firestore) {

	}
	
	// This function should retrieve all the sleep collection in Firestore
	getSleep(){
		let sleepCollection = collection(this.fs, 'sleepCollection')
		return collectionData(sleepCollection, {idField: "id"})
	}

	addSleep(desc:string){
		// TODO (addDoc)
		let sleepCollection = collection(this.fs, 'sleepCollection')
		return collectionData(sleepCollection, {idField: "id"})
		
	}

	deleteSleep(id:string){
		// TODO (deleteDoc)
		let sleepCollection = collection(this.fs, 'sleepCollection')
		return collectionData(sleepCollection, {idField: "id"})
	}
	

}


// Default Provided
/*
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	
	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}


	

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}
}
*/
