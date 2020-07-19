export class Restaurent{
	id:number;
	name:string;
	rating:number;
	location:string;
	itemName:string;
	price:number;
	food:Food[];
}

export class Food{
	itemId:number;
	itemName:string;
	resId:number;
	price:number;
}