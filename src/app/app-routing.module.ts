import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TradersComponent} from "./traders/traders.component";
import {TraderComponent} from "./trader/trader.component";

const routes: Routes = [
  { path: 'trader', component: TradersComponent },
  { path: 'trader/:id', component: TraderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
