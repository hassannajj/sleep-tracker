import { nanoid } from 'nanoid';
// combining sleep data nd sleepiness level
export class SleepData {

	
	dateId:Date;
	sleepHour: number;
	sleepLevel: number;

	constructor() {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
		this.dateId = new Date();
		this.sleepHour = 0;
		this.sleepLevel = 0;
		// modifying these above will change display
	}
	
	dateString():string {
		console.log("dateID raw: ", this.dateId);
		return this.dateId.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	
	summaryString():string {
		return 'Unknown sleep data';
	}
	
}


// NOTES: Only using one TS file to store data for both slepe hours and sleep level