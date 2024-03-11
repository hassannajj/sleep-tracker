import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
//import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import * as firebase from 'firebase/app';
import { from, Observable } from 'rxjs';

import { Firestore, collection, collectionData, deleteDoc, doc, addDoc, setDoc, getDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	
	
	constructor(private fs:Firestore) {
	}
	
	// This function should retrieve all the sleep collection in Firestore
	
	getSleep(){
		let sleepCollection = collection(this.fs, 'sleepData')
		console.log("sleepCollection: ", sleepCollection)
		return collectionData(sleepCollection, {idField: "id"})
	}
	
	
	/*
	getSleep(date:string){
		const customDocRef = doc(this.fs, 'sleepData', date);
		const docSnap = getDoc(customDocRef);
		return this.firestoreToObj(docSnap);
		
	}
	*/
	


	
	

	/*
	addSleep(sleep: SleepData){
		// should create key of date and values should be the dictionary entires
		//let dateToString = sleep.dateString();
		//sleep.dateId = doc(collection(this.fs, "id")).id;
		let documentRef = doc(collection(this.fs, "sleepData"), sleep.dateString());
		return addDoc(collection(this.fs, "sleepStuff"), this.objToFirestore(sleep))
		
	}
	*/

	/*
	deleteSleep(id:string){
		// TODO (deleteDoc)
		let sleepCollection = collection(this.fs, 'sleepData')
		return collectionData(sleepCollection, {idField: "id"})
	}
	*/

	
	// Used in Tab 1
 	addSleep(sleep:SleepData){
		// this creates a new document in firebase, setting docId to the date of sleep log
		const customDocRef = doc(this.fs, 'sleepData', sleep.dateString());
		// this will populate the values of the document with sleep data
		const firestoreData = this.objToFirestore(sleep);

		return setDoc(customDocRef, firestoreData)
  	}
  
	deleteSleep(sleep: SleepData) {
		// get a reference to the document to delete based on the document ID
		const customDocRef = doc(this.fs, 'sleepData', sleep.dateString());
		// delete the document
		return deleteDoc(customDocRef);
	}
	


	// helper function to parse sleepObj into acceptable firebase format
	objToFirestore(sleepData: SleepData){
		return {
			dateId: sleepData.dateString(),
			sleepHour: sleepData.sleepHour,
			sleepLevel: sleepData.sleepLevel
		};
	}

	firestoreToObj(data: any): SleepData {
		const sleepData = new SleepData();
		sleepData.dateId = new Date(data.dateId);
		sleepData.sleepHour = data.sleepHour;
		sleepData.sleepLevel = data.sleepLevel;
		return sleepData;
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
