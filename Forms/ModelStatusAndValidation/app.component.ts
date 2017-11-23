import {Component} from '@angular/core';

export class User {
	
	name: string;
	email: string;
	phone: number;
	
}

@Component({
	selector: 'my-app',
	styles: [
		`
			input.ng-touched.ng-invalid {border:solid red 2px;}
			input.ng-touched.ng-valid {border:solid green 2px;}
		`
	],
	template: `
		<div>
			<div class="form-group">
				<label for="">Name:</label>
				<input
					class="form-control"
					name="name"
					required
					[(ngModel)]="user.name"
					#name="ngModel"
				>
				<!--<div
					class="alert alert-danger"
					[hidden]="name.valid || name.untouched"
				>
					Please input name
				</div>-->
			</div>
			
			<div class="form-group">
				<label for="">Email:</label>
				<input
					class="form-control"
					name="email"
					required
					pattern="[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}"
					[(ngModel)]="user.email"
					#email="ngModel"
				>
				<!--<div
					class="alert alert-danger"
					[hidden]="email.valid || email.untouched"
				>
					Please input email
				</div>-->
			</div>
			
			<div class="form-group">
				<label for="">Phone:</label>
				<input
					class="form-control"
					name="phone"
					required
					pattern="[0-9]"
					[(ngModel)]="user.phone"
					#phone="ngModel"
				>
				<!--<div
					class="alert alert-danger"
					[hidden]="phone.valid || phone.untouched"
				>
					Please input phone
				</div>-->
			</div>
			
			<div class="form-group">
				<button
					type="button"
					class="btn btn-default"
					[disabled]="name.invalid || email.invalid || phone.invalid"
					(click)="addUser()"
				>Add User</button>
			</div>
		</div>
	`,
})

export class AppComponent {
	
	user: User = new User();
	
	addUser() {
		console.log(this.user);
	}
	
}