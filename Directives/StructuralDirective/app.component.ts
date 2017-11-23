import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div *while="condition">
			First element
		</div>
		<div *while="!condition">
			Second element
		</div>
		<button type="button" (click)="toggle()">Toggle</button>
	`
})

export class AppComponent {
	
	condition: boolean = false;
	
	toggle() {
		this.condition = !this.condition;
	}
}