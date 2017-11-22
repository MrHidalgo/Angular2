import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h2> Hello Angular JS </h2>
	`,
	styles: [``]
})

export class AppComponent implements OnInit, OnDestroy {
	
	constructor() {
		this.log(`constructor`);
	}
	
	ngOnInit() {
		this.log(`OnInit`);
	}
	
	ngOnDestroy() {
		this.log(`OnDestroy`);
	}
	
	private log(msg: string) {
		console.log(msg);
	}
}
