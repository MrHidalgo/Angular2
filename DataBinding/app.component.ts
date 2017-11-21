import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: [
		'app.component.css'
	]
})

export class AppComponent {
	name: string = "Friend";
	placeholder: string = "Input text...";
	value: string = "";
	count: number = 0;
	
	showMessage(): void {
		alert("Dear " + this.name + " " + this.placeholder);
	}
	
	logChange(): void {
		console.log(this.value);
	}
	
	incCount($event: any): void {
		this.count++;
		console.log($event);
	}
}
