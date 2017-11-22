import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'Setter/appSetter.component.html',
	styles: [``]
})

export class AppComponent {
	
	/*
	* Child to parent
	* */
	// name:string="Tom";
	// age:number = 24;
	
	/*
	* Setter
	* */
	// name:string="Tom";
	// age:number = 1000;
	
	/*
	* EventEmitter
	* */
	// clicks: number = 0;
	// onChanged(inc: any): void {
	// 	(inc == true) ? this.clicks++ : this.clicks--;
	// }
	
	/*
	* Two-sided data binding
	* */
	// name: string = "Vlad";
}
