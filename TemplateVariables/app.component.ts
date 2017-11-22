import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<p #userName data-name="link-0">{{name}}</p>
		<p>textContent: {{userName.textContent}}</p>
		<p>dataset: {{userName.dataset.name}}</p>
	`,
	styles: [``]
})

export class AppComponent {
	name: string = "Bob";
}
