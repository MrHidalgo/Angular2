import {Directive, HostBinding, Input, OnInit} from "@angular/core";

@Directive({
	selector: '[bold]',
	host: {
		'(mouseenter)' : 'onMouseEnter()',
		'(mouseleave)' : 'onMouseLeave()'
	}
})

export class BoldDirective implements OnInit {
	
	@Input() selectedSize: string;
	@Input() defaultSize: string;
	
	private fontSize: string;
	private fontWeight: string;
	private textDecoration: string;
	
	ngOnInit() {
		this.fontSize = this.defaultSize;
	}
	
	constructor() {}
	
	@HostBinding('style.fontSize') get getFontSize() {
		return this.fontSize;
	}
	@HostBinding('style.fontWeight') get getFontWeight() {
		return this.fontWeight;
	}
	@HostBinding('style.cursor') get getCursor() {
		return 'not-allowed';
	}
	@HostBinding('style.textDecoration') get getTextDecoration() {
		return this.textDecoration;
	}
	
	onMouseEnter() {
		this.fontWeight = 'bold';
		this.fontSize = this.selectedSize;
		this.textDecoration = "underline";
	}
	onMouseLeave() {
		this.fontWeight = "normal";
		this.fontSize = this.defaultSize;
		this.textDecoration = "none";
	}
	
}