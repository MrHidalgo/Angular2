import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
	selector: 'child-eventemitter-component',
	template: `
		<button type="button" (click)="change(true)">+</button>
		<button type="button" (click)="change(false)">-</button>
	`
})

export class ChildEventEmitterComponent {

	@Output() onChanged: EventEmitter<boolean> = new EventEmitter();
	
	change(increased: any) {
		this.onChanged.emit(increased);
	}
}