import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { TestemodalComponent } from './testemodal/testemodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teste',
    pathMatch: 'full'
  },
  {
    path: 'teste',
    component: TestemodalComponent
  }
];


@NgModule({
  declarations: [AppComponent, TestemodalComponent],
  imports: [
    CommonModule,
    BrowserModule,    
    RouterModule.forRoot(routes), NgbModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
