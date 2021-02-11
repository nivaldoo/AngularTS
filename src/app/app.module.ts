import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];


@NgModule({
  declarations: [AppComponent, ProductListComponent, TopBarComponent, ProductAlertComponent],
  imports: [
    CommonModule,
    BrowserModule,    
    RouterModule.forRoot(routes), NgbModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
