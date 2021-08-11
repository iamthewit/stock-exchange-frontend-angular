import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Trader} from "./trader";

@Injectable({
  providedIn: 'root'
})
export class TraderService {
  constructor(private http: HttpClient) { }

  getTraders(): Observable<Trader[]>{
    let url = 'http://localhost:8000/trader';

    return this.http.get<Trader[]>(url)
  }
}
