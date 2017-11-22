import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
	selector: '[bold]',
	host: {
		'(mouseenter)' : 'onMouseEnter()',
		'(mouseleave)' : 'onMouseLeave()'
	}
})

export class BoldDirective {
	
	constructor(
		private elemRef: ElementRef,
		private render: Renderer2
	) {
		let objStyle = {
			"cursor" : "pointer",
			"font-size" : "30px",
			"font-family" : "Verdana",
		};
		
		for(let propName in objStyle) {
			this.render.setStyle(
				this.elemRef.nativeElement,
				propName,
				objStyle[propName]
			);
		}
	}
	
	onMouseEnter() {
		this.setFontWeight("bold");
	}
	
	onMouseLeave() {
		this.setFontWeight("normal");
	}
	
	private setFontWeight(val: string): void {
		this.render.setStyle(
			this.elemRef.nativeElement,
			"font-weight", val
		)
	}
}