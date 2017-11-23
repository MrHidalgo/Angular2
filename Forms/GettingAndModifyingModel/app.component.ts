import {Component} from '@angular/core';
import {NgModel} from "@angular/forms";

export class Phone {
	constructor(
		public title: string,
		public price: number,
		public company: string
	) {}
}

@Component({
	selector: 'my-app',
	template: `
		<div class="col-xs-12">
			<div class="form-group">
				<label>Model name: </label>
				<input
					class="form-control"
					name="title"
					[(ngModel)]="phone.title"
					#phoneTitle="ngModel"
					(ngModelChange)="onTitleChange()"
				/>
			</div>
			<div class="form-group">
				<label>Price: </label>
				<input
					type="number"
					class="form-control"
					name="price"
					[(ngModel)]="phone.price"
					#phonePrice="ngModel"
				/>
			</div>
			<div class="form-group">
				<label>Manufacturer: </label>
				<select
					class="form-control"
					name="company"
					[(ngModel)]="phone.company"
					#phoneCompany="ngModel"
				>
					<option  *ngFor="let comp of companies" [value]="comp">
						{{comp}}
					</option>
				</select>
			</div>
			<div class="form-group">
				<button class="btn btn-default" (click)="addPhone(phoneTitle, phonePrice, phoneCompany)">Add</button>
			</div>
		</div>
		<div>
			<h3>Elements add: </h3>
			<hr>
			<p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
			<p>{{phonePrice.name}} : {{phonePrice.model}}</p>
			<p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
		</div>
	`,
})

export class AppComponent {
	
	phone: Phone = new Phone("", 0, "Samsung");
	
	companies: [string] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
	
	addPhone(title:NgModel, price:NgModel, company:NgModel) {
		console.log(title.model);
		console.log(price.model);
		console.log(company.model);
	}
	
	onTitleChange() {
		console.log("onTitleChange");
		console.log(this.phone);
		
		if(this.phone.title == "007") {
			this.phone.title = "000";
		}
	}
	
}