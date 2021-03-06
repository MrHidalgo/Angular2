import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
	selector: '[bold]'
})

export class BoldDirective {
	
	private fontWeight: string = "normal";
	
	constructor() {}
	
	@HostBinding('style.fontWeight') get getFontWeight() {
		return this.fontWeight;
	}
	@HostBinding('style.cursor') get getCursor() {
		return "pointer";
	}
	
	@HostListener('mouseenter') onMouseEnter() {
		this.fontWeight = "bold";
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.fontWeight = "normal";
	}
}