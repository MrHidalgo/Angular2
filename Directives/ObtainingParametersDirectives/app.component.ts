import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<p 
				bold 
				[selectedSize]="'28px'" 
				[defaultSize]="'14px'"
			>Hello Angular 2</p>
		</div>
	`,
	styles: [`
	
	`]
})

export class AppComponent {}
