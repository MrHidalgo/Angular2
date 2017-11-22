import {Component, ContentChild, ElementRef} from "@angular/core";

@Component({
	selector: 'child-comp',
	template: `
		<ng-content></ng-content>
		<button (click)="change()">Change</button>
	`
})

export class ChildComponent {
	
	@ContentChild("headerContent")
	header: ElementRef;
	
	change() {
		console.log(this.header.nativeElement);
		this.header.nativeElement.textContent = "PARENT";
	}
}