import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FdsHomeRoutingModule } from './fds-home-routing.module';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';


@NgModule({
  declarations: [
  
  AdminhomeComponent],
  imports: [
    CommonModule,
    FdsHomeRoutingModule
  ]
})
export class FdsHomeModule { }
