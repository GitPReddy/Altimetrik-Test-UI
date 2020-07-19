import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AddRestaurentComponent } from './components/resturents/restaurent.component';
import { OrderItemComponent } from './components/orders/orders.component';

const routes: Routes = [
	{path:'', redirectTo:'/restaurents',pathMatch:'full'},
	{	
		path:'restaurents', component:AdminhomeComponent,
		children:
		[
			
			{
				path:'addRestaurent',
				component:AddRestaurentComponent
				

			},
			{
				path:'orderItems',
				component:OrderItemComponent
				

			}
		
		]

	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FdsHomeRoutingModule { }
