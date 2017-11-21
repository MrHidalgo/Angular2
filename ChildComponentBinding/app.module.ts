import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ChildSetterComponent } from "./Setter/childSetter.component";
import { ChildEventEmitterComponent } from "./EventEmitter/childEventEmitter.component";
import { ChildTwoSidedDataComponent } from "./TwoSidedData/childTwoSidedData.component";

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