import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<p *ngIf="condition">Hello Angular 2 =)</p>
			<p *ngIf="!condition">Hello Angular 1 =(</p>
			<button type="button" (click)="toggle()">Toggle</button>
			
			<!--
				Eq:
				<p *ngIf="condition;else unset">
                  Hello
                </p>
                <ng-template #unset>
                  <p>By</p>
                </ng-template>
			-->
			
			<!--
				Eq:
				<div *ngIf="condition; then thenBlock else elseBlock"></div>
	            <ng-template #thenBlock>Then template</ng-template>
	            <ng-template #elseBlock>Else template</ng-template>
			-->
			
		</div>
	`
})

export class AppComponent {
	
	condition: boolean = false;
	
	toggle() {
		this.condition = !this.condition;
	}
}
