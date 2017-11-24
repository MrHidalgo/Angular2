import { Component} from '@angular/core';

@Component({
	selector: 'my-app',
	styles: [
		`
			.container {
				text-align: center;
			}
		`
	],
	template: `
		<div class="container">
			<h1> Angular JS Pomodoro Timer</h1>
			
			<h3> {{minutes}} : {{seconds | number: '2.0'}}</h3>
			
			<button type="button" class="btn btn-primary" (click)="pause()">
				{{ buttonName }}
			</button>
		</div>
	`
})

export class AppComponent {
	minutes: number;
	seconds: number;
	isPaused: boolean;
	buttonName: string;
	
	constructor() {
		this.resetTime();
		this.isPaused = false;
		this.buttonName = "Pause";
		
		setInterval(() => {
			this.tick()
		}, 1000);
	}
	
	private resetTime(): void {
		this.minutes = 24;
		this.seconds = 59;
		this.buttonName = "Srart";
		this.pause();
	}
	
	private tick(): void {
		if(!this.isPaused) {
			this.buttonName = "Pause";
			
			if(--this.seconds < 0) {
				this.seconds = 59;
				
				if(--this.minutes < 0) {
					this.resetTime();
				}
			}
		}
	}
	
	private pause(): void {
		this.isPaused = !this.isPaused;
		
		if(this.minutes < 0 || this.seconds < 59) {
			this.buttonName = this.isPaused ?  "Resume" : "Pause";
		}
	}
}