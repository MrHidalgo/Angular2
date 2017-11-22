import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<child-comp #counter></child-comp>
		<button (click)="counter.inc()">+</button>
		<button (click)="counter.dec()">-</button>
	`,
	styles: [``]
})

export class AppComponent {
	
}
