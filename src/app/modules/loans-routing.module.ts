import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from '../components/loans/loans.component';


const routes: Routes = [
  {
    path: '',
    component: LoansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LoansRoutingModule {}