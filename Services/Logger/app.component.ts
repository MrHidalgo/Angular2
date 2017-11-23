import {Component, OnInit} from '@angular/core';

import { DataService } from "./data.service";
import { LogService } from "./log.service";

import { Phone } from "./phone";

@Component({
	selector: 'my-app',
	template: `
		<div class="panel">
			<div class="form-inline">
				<div class="form-group">
					<div class="col-md-8">
						<input class="form-control" [(ngModel)]="name" placeholder="Model" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-md-6">
						<input type="number" class="form-control" [(ngModel)]="price" placeholder="Price" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-md-offset-2 col-md-8">
						<button class="btn btn-default" (click)="addItem(name, price)">Add</button>
					</div>
				</div>
			</div>
			<table class="table table-striped">
				<thead>
				<tr>
					<th>Model</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
				<tr *ngFor="let item of items">
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
				</tr>
				</tbody>
			</table>
		</div>
	`,
	providers: [
		DataService,
		LogService
	]
})

export class AppComponent implements OnInit {
	items: Phone[] = [];
	
	constructor(
		private dataService: DataService
	) {}
	
	ngOnInit() {
		this.items = this.dataService.getData();
	}

	addItem(name: string, price: number) {
		this.dataService.addData(name, price);
	}
}