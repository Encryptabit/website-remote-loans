import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from '../components/loans/loans.component';
import { LoansRoutingModule } from './loans-routing.module';



@NgModule({
  declarations: [
    LoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
