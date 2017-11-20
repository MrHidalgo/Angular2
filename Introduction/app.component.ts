import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<label for="">Input name:</label>
		<input type="text" placeholder="name" [(ngModel)]="name">
		<h1>Hello {{ name }}</h1>`
})

export class AppComponent {
	name = '';
}