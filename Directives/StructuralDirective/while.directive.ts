import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
	selector: '[while]'
})

export class WhileDirective {
	
	constructor(
		private tmplRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) {}
	
	@Input() set while(condition: boolean) {
		if(condition) {
			this.viewContainer.createEmbeddedView(
				this.tmplRef
			)
		} else {
			this.viewContainer.clear();
		}
	}
}