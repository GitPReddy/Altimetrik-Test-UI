import { Component, OnInit, OnDestroy,ElementRef,ViewChild   } from '@angular/core';
import {AdminHomeService} from '../../services/adminhome.service'
import {Restaurent, Food} from '../../../fds-home/models/restaurent'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit  {

 @ViewChild('searchText') searchText:ElementRef;
  pageTitle:string;
  restaurentList:Restaurent[];
  foodList:Food[];
  resLength:number = 0;
  hasRestaurents:boolean = false;
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];
  constructor(private adminHomeService:AdminHomeService, private route: ActivatedRoute, private router:Router) { 
  	
  }

  ngOnInit(): void {
  	this.pageTitle = 'Food Delivery System!!';
  	this.loadRestaurents();
  }
  
  loadRestaurents(){
  	this.adminHomeService.getRestaurentsList().subscribe( (response:Restaurent[]) => {
  		this.restaurentList = response;
  		this.resLength = this.restaurentList.length;
  		this.restaurentList.forEach(restaurent => {
  			this.foodList = restaurent.food;
  			this.foodList.forEach(food => {
  				if(restaurent.id == food.resId){
  					restaurent.itemName = food.itemName;
  					restaurent.price = food.price;
  					//this.restaurentList.push(restaurent);
  				}
  			});
  		});
  		
  		if(this.resLength > 0){
  			this.hasRestaurents = true;
  		}
  		console.log(this.restaurentList);
  	});
  }
  searchText1:string;
  searchItem(event){
  	this.searchText1 = this.searchText.nativeElement.value;
  	this.adminHomeService.getRestaurentsListByItem(this.searchText1).subscribe( (response:Restaurent[]) => {
  		this.restaurentList = response;
  		this.resLength = this.restaurentList.length;
  		this.restaurentList.forEach(restaurent => {
  			this.foodList = restaurent.food;
  			this.foodList.forEach(food => {
  				if(restaurent.id == food.resId){
  					restaurent.itemName = food.itemName;
  					restaurent.price = food.price;
  					//this.restaurentList.push(restaurent);
  				}
  			});
  		});
  	
  	});
  	console.log(this.searchText1);
  }
  
  orderItem(restaurent:Restaurent){
  	this.router.navigate(['orderItems'], { relativeTo: this.route });
  	console.log(restaurent);
  }

}
