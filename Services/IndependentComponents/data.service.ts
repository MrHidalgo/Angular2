import { Injectable } from "@angular/core";

import { Phone } from "./phone";
import { LogService } from "./log.service";

@Injectable()
export class DataService {

	private data: Phone[] = [
		{ name: "iPhone", price: 45000 },
		{ name: "Samsung", price: 15000 },
		{ name: "Motorola", price: 25000 },
		{ name: "Nokia", price: 5000 }
	];
	
	constructor(
		private logService: LogService
	) {}
	
	getData(): Phone[] {
		this.logService._log("get data");
		return this.data;
	}
	
	addData(name: string, price: number) {
		this.data.push(new Phone(name, price));
		this.logService._log("add new data");
	}
}