import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<p #nameText>{{name}}</p>
		<p>{{nameText.textContent}}</p>
		<button type="button" (click)="change()">Change</button>
	`,
	styles: [``]
})

export class AppComponent {
	
	@ViewChild("nameText")
	nameParagraph: ElementRef;
	
	name: string = "Smith";
	
	change() {
		this.nameParagraph.nativeElement.textContent = "Bob";
	}
}
