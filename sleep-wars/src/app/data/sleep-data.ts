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

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return this.dateId.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
