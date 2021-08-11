import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TradersComponent} from "./traders/traders.component";

const routes: Routes = [
  { path: 'trader', component: TradersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
