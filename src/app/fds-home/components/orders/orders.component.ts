import { Component, OnInit, OnDestroy,ElementRef,ViewChild   } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrderItemComponent implements OnInit{

	pageTitle:string;
	
	constructor() { 
  	
  }

  ngOnInit(): void {
  	this.pageTitle = 'Orders have been successfully placed!!';
  	
  }
	
}