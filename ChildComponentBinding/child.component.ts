import {Component, Input} from "@angular/core";

@Component({
	selector: 'child-component',
	template: `
		<h2>User name: {{userName}}</h2>
		<h3>User Age: {{userAge}}</h3>
	`
})

export class ChildComponent {
	@Input() userName: string;
	@Input() userAge: string;
}