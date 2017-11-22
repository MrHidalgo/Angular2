import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ChildComponent } from "./child.component";
import { BoldDirective } from "./bold.directive";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [
		AppComponent,
		BoldDirective
	],
	bootstrap: [
		AppComponent
	],
	exports: [],
	providers: []
})

export class AppModule {}