import { Phone } from "./phone";

export class DataService {

	private data: Phone[] = [
		{ name: "iPhone", price: 45000 },
		{ name: "Samsung", price: 15000 },
		{ name: "Motorola", price: 25000 },
		{ name: "Nokia", price: 5000 }
	];
	
	getData(): Phone[] {
		return this.data;
	}
	
	addData(name: string, price: number) {
		this.data.push(new Phone(name, price));
	}
}