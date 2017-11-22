import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from "./child.component";

@Component({
	selector: 'my-app',
	template: `
		<child-comp></child-comp>
		<button (click)="inc()">+</button>
		<button (click)="dec()">-</button>
	`,
	styles: [``]
})

export class AppComponent {
	
	@ViewChild(ChildComponent)
	private counterComponent: ChildComponent;
	
	inc() {
		this.counterComponent.inc();
	}
	dec() {
		this.counterComponent.dec();
	}
}
