import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styles: [
		`
			h1 {
				color: rgb(0, 255, 0);
			}
		`
	]
})

export class AppComponent {
	name: string = "Main";
	// name: string = "";
}
