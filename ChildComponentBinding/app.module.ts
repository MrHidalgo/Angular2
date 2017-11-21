import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ChildSetterComponent } from "./childSetter.component";
import { ChildEventEmitterComponent } from "./childEventEmitter.component";
import { ChildTwoSidedDataComponent } from "./childTwoSidedData.component";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [
		AppComponent,
		ChildComponent,
		ChildSetterComponent,
		ChildEventEmitterComponent,
		ChildTwoSidedDataComponent
	],
	bootstrap: [AppComponent],
	exports: [],
	providers: []
})

export class AppModule {}