import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
			<h1>Hello Angular 5</h1>
			<p [ngStyle]="{'font-size':'14px', 'font-family':'Segoe Print'}">
				Angular 5 представляет модульную архитектуру приложения
			</p>
		</div>
		
		<!--
			Eq:
			
			<div [style.fontSize]="'13px'" [style.fontFamily]="'Verdana'">
				<h1>Hello Angular 5</h1>
				<p [style.fontSize]="'14px'" [style.fontFamily]="'Segoe Print'">
					Angular 5 представляет модульную архитектуру приложения
				</p>
			</div>
		-->
	`,
	styles: [`

	`]
})

export class AppComponent {

}
