import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FdsHomeModule } from './fds-home/fds-home.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './fds-home/components/adminhome/filter.pipe';
import { DxSelectBoxModule, DxListModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FdsHomeModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
