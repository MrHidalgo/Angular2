import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div [ngSwitch]="count">
			<ng-template ngSwitchCase="0">
				Case 0
			</ng-template>
			<ng-template ngSwitchCase="1">
				Case 1
			</ng-template>
			<ng-template ngSwitchCase="2">
				Case 2
			</ng-template>
			<ng-template ngSwitchCase="3">
				Case 3
			</ng-template>
			<ng-template ngSwitchDefault>
				Case Default
			</ng-template>
		</div>
	`
})

export class AppComponent {
	count: number = 4;
}

