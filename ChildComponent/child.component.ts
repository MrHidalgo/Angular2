import {Component} from "@angular/core";

@Component({
	selector: 'child-component',
	template: `
		<ng-content></ng-content>
		<h1> Child component => {{name}} =)!</h1>
	`,
	styles: [
		`
			h1 {
				color: rgb(0, 0, 255);
			}
		`
	]
})

export class ChildComponent {
	name: string = "Children";
}