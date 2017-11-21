import {Component, Input} from "@angular/core";

@Component({
	selector: 'child-setter-component',
	template: `
		<h2>User name: {{userName}}</h2>
		<h3>User Age: {{userAge}}</h3>
	`
})

export class ChildSetterComponent {
	@Input() userName: string;
	_userAge: number;
	
	@Input()
	set userAge(age: number) {
		this._userAge =
			(age < 0) ? 0 :
				(age > 100) ? 100 : age;
	}
	
	get userAge() {
		return this._userAge;
	}
}