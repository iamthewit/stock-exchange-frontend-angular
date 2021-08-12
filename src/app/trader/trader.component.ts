import { Component, OnInit } from '@angular/core';

import {Trader} from "../trader";
import {TraderService} from "../trader.service";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {
  trader?: Trader;

  constructor(
    private activatedRoute: ActivatedRoute,
    private traderService: TraderService
  ) { }

  ngOnInit(): void {
    this.getTrader();
  }

  private getTrader() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.traderService.getTrader(id).subscribe(trader => this.trader = trader);
  }
}
