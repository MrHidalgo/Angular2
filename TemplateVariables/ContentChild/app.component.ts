import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<child-comp>
			<h2 #headerContent> Hello from parent: {{name}} =)!</h2>
		</child-comp>
	`,
	styles: [``]
})

export class AppComponent {

	name: string = "Main Component";

}
