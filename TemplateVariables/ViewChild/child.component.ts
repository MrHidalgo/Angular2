import { Component } from "@angular/core";

@Component({
	selector: 'child-comp',
	template: `
		<p>{{counter}}</p>
	`
})

export class ChildComponent {
	counter: number = 0;
	
	inc(): void {
		this.counter++;
	}
	dec(): void {
		this.counter--;
	}
}