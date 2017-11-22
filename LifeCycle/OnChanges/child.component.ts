
import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
	selector: 'child-comp',
	template: `
		<h2> Hello {{name}}</h2>
		<h2> Age {{age}}</h2>
	`
})

export class ChildComponent implements OnInit, OnChanges {
	@Input() name: string;
	@Input() age: number;
	
	constructor() {
		this.log(`child constructor`);
	}
	
	ngOnInit() {
		this.log(`child ngOnInit`);
	}
	
	ngOnChanges(changes: SimpleChanges) {
		for(let propName in changes) {
			let chng = changes[propName];
			
			let cur  = JSON.stringify(chng.currentValue);
			let prev = JSON.stringify(chng.previousValue);
			
			this.log(`child: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
		}
	}
	
	private log(msg: string): void {
		console.log(msg);
	}
}