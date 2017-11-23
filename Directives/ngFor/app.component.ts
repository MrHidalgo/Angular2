import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<ul>
			<li *ngFor="let item of items; let idx = index">
				{{idx + 1}} - {{item}}
			</li>
		</ul>
	`
})

export class AppComponent {
	items: string[] = [
		"iPhone 3",
		"iPhone 4",
		"iPhone 5",
		"iPhone 6",
		"Samsung",
		"LG",
		"Motorola",
		"Nokia",
		"Microsoft",
		"Nexus"
	];
}
