import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit} from "@angular/core";

@Component({
	selector: 'child-comp',
	template: `
		<h2> Hello => {{name}}</h2>
	`
})

export class ChildComponent implements
	OnChanges,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
{
	
	@Input() name: string;
	count: number = 1;
	
	ngOnChanges() {
		this.log(`ngOnChanges`);
	}
	ngOnInit() {
		this.log(`ngOnInit`);
	}
	ngDoCheck() {
		this.log(`ngDoCheck`);
	}
	ngAfterContentInit() {
		this.log(`ngAfterContentInit`);
	}
	ngAfterContentChecked() {
		this.log(`ngAfterContentChecked`);
	}
	ngAfterViewInit() {
		this.log(`ngAfterViewInit`);
	}
	ngAfterViewChecked() {
		this.log(`ngAfterViewChecked`);
	}
	ngOnDestroy() {
		this.log(`ngOnDestroy`);
	}
	
	private log(msg: string) {
		console.log(msg);
		this.count++;
	}
}