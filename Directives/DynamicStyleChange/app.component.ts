import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div [ngClass]="{invisible:visibility}">
			<h3> Some text...</h3>
		</div>
		<button type="button" (click)="change()">Change</button>
		
		<!--
			<div [class.invisible]="visibility">
		-->
		
		<!--
			<div [style.display]="visibility==true?'block':'none'">
		-->
	`,
	styles: [`
		.invisible{display:none;}
	`]
})

export class AppComponent {
	visibility: boolean = false;
	
		change() {
		this.visibility = !this.visibility;
	}
}
