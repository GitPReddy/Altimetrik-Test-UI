import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{path:'', redirectTo:'/fdshome', pathMatch:'full'},
	{path:'fdshome', loadChildren:'./fds-home/fds-home.module#FdsHomeModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
