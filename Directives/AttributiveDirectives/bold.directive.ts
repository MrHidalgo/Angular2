import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
	selector: '[bold]'
})

export class BoldDirective {
	
	constructor(
		private elemRef: ElementRef,
		private render: Renderer2
	) {
		this.render.setStyle(this.elemRef.nativeElement, "font-weight", "bold");
	}
}