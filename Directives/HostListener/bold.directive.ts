import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
	selector: '[bold]'
})

export class BoldDirective {
	
	constructor(
		private elemRef: ElementRef,
		private render: Renderer2
	) {
		this.render.setStyle(
			this.elemRef.nativeElement,
			"cursor",
			"pointer"
		);
	}
	
	@HostListener('mouseenter') onMouseEnter() {
		this.setFontWeight('bold');
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.setFontWeight('normal');
	}
	
	private setFontWeight(val: string) {
		this.render.setStyle(
			this.elemRef.nativeElement,
			"font-weight",
			val
		)
	}
}